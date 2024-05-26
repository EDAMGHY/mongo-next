"use client";

import { H1 } from "@/components/ui";
import { Wrapper } from "@/components/widgets";
import { Form } from "@/components/widgets/Form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createNote } from "@/actions/note";
import { useRouter } from "next/navigation";
import { formSchema } from "@/lib/utils";
import { IFormSchema } from "@/types";
import { useSession } from "next-auth/react";

const CreateNote = () => {
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
  const { mutate: createNoteMutation, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const onSubmit = (data: IFormSchema) => {
    const note = { ...data, userId };
    createNoteMutation(note);
    router.push("/");
  };

  return (
    <Wrapper className='space-y-8 py-5'>
      <H1>Add Note</H1>
      <Form form={form} onSubmit={onSubmit} isPending={isPending} />
    </Wrapper>
  );
};

export default CreateNote;
