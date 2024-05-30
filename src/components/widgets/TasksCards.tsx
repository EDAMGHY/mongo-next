"use client";

import { ITask } from "@/types";
import { Card } from "./Card";
import { deleteTask, getTasks, toggleCompletedTask } from "@/actions/task";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { revalidatePath } from "next/cache";
import { useSession } from "next-auth/react";
import EmptyBlock from "./EmptyBlock";

export const TasksCards = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const {
    data = [] as ITask[],
    error,
    isFetching,
  } = useQuery({
    queryKey: ["task", userId],
    queryFn: () => getTasks(userId as string),
  });

  const queryClient = useQueryClient();

  // Mutations
  const { mutate: deleteTaskMutation } = useMutation({
    mutationFn: deleteTask as any,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["task"] });
      revalidatePath(`/`);
    },
  });

  // Mutations
  const { mutate: toggleCompletedMutation } = useMutation({
    mutationFn: toggleCompletedTask as any,
    onSuccess: () => {
      console.log({ success: "success" });
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["task"] });
      revalidatePath(`/`);
    },
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (data.length <= 0 && !isFetching) {
    return <EmptyBlock />;
  }

  if (error) {
    return <div>Error loading task: {error.message}</div>;
  }

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
      {data?.map((task: any, index: number) => (
        <Card
          key={index + 1}
          {...task}
          handleDeleteTask={(id: string) =>
            deleteTaskMutation(id as any, userId as any)
          }
          onToggleCompletedTask={(id: string, completed: boolean) => {
            console.log("task?.completed", { id, completed });
            toggleCompletedMutation({ id, completed } as any);
          }}
        />
      ))}
    </div>
  );
};
