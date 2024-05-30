"use client";

import { getTask, updateTask } from "@/actions/task";
import { H1 } from "@/components/ui";
import { Wrapper } from "@/components/widgets";
import { Form } from "@/components/widgets/Form";
import { formSchema } from "@/lib/utils";
import { ITask, IFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskDetails = () => {
  const { id } = useParams();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const {
    data: task = {} as ITask,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTask(id as string, userId as string),
  });

  const router = useRouter();
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      completed: false,
    },
  });

  useEffect(() => {
    form.setValue("title", task?.title || "");
    form.setValue("description", task?.description || "");
    form.setValue("completed", task?.completed ?? false);
  }, [task, id]);

  const queryClient = useQueryClient();

  // Mutations
  const { mutate: updateTaskMutation, isPending } = useMutation({
    mutationFn: () => updateTask(id as string, { ...form.getValues(), userId }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task"] });
      revalidatePath(`/tasks/${id}`);
      revalidatePath(`/`);
    },
  });

  const onSubmit = (data: IFormSchema) => {
    const formData = { ...data, userId };
    updateTaskMutation(id as any, formData as any);
    router.push("/");
  };

  return (
    <Wrapper className='py-5 space-y-8 '>
      <H1>Task Details {id}</H1>
      <Form
        form={form}
        dataFetched={isFetching}
        onSubmit={onSubmit}
        isPending={isPending}
      />
    </Wrapper>
  );
};

export default TaskDetails;
