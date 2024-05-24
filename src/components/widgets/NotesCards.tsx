"use client";

import { INote } from "@/types";
import { Card } from "./Card";
import { deleteNote, getNotes } from "@/actions/note";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { revalidatePath } from "next/cache";

export const NotesCards = () => {
  const {
    data = [] as INote[],
    error,
    isFetching,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: () => getNotes(),
  });

  const queryClient = useQueryClient();

  // Mutations
  const { mutate: deleteNoteMutation, isPending } = useMutation({
    mutationFn: deleteNote,
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
    <div className='grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {data?.map((note: any, index: number) => (
        <Card
          key={index + 1}
          {...note}
          handleDeleteNote={(id: string) => deleteNoteMutation(id as any)}
        />
      ))}
    </div>
  );
};
