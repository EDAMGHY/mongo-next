"use client";

import { INote } from "@/types";
import { Card } from "./Card";
import { deleteNote, getNotes } from "@/actions/note";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { revalidatePath } from "next/cache";
import { useSession } from "next-auth/react";

export const NotesCards = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const {
    data = [] as INote[],
    error,
    isFetching,
  } = useQuery({
    queryKey: ["notes", userId],
    queryFn: () => getNotes(userId as string),
  });

  const queryClient = useQueryClient();

  // Mutations
  const { mutate: deleteNoteMutation } = useMutation({
    mutationFn: deleteNote as any,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      revalidatePath(`/`);
    },
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading notes: {error.message}</div>;
  }

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {data?.map((note: any, index: number) => (
        <Card
          key={index + 1}
          {...note}
          handleDeleteNote={(id: string) =>
            deleteNoteMutation(id as any, userId as any)
          }
        />
      ))}
    </div>
  );
};
