"use client";

import { H1 } from "@/components/ui";
import { Wrapper } from "@/components/widgets";
import { Form } from "@/components/widgets/Form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createTask } from "@/actions/task";
import { useRouter } from "next/navigation";
import { formSchema } from "@/lib/utils";
import { IFormSchema } from "@/types";
import { useSession } from "next-auth/react";

const CreateTask = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const router = useRouter();
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      completed: false,
    },
  });

  const queryClient = useQueryClient();

  // Mutations
  const { mutate: createTaskMutation, isPending } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const onSubmit = (data: IFormSchema) => {
    const task = { ...data, userId };
    createTaskMutation(task);
    router.push("/");
  };

  return (
    <Wrapper className='space-y-8 py-5'>
      <H1>Add Task</H1>
      <Form form={form} onSubmit={onSubmit} isPending={isPending} />
    </Wrapper>
  );
};

export default CreateTask;
