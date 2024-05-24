"use client";

import { H2 } from "@/components/ui";
import { Wrapper } from "@/components/widgets";
import { Form } from "@/components/widgets/Form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createNote } from "@/actions/note";
import { useRouter } from "next/navigation";
import { formSchema } from "@/lib/utils";
import { IFormSchema } from "@/types";

const CreateNote = () => {
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
    console.log("data", { data });

    createNoteMutation(data);
    router.push("/");
  };

  return (
    <Wrapper>
      <div className='max-w-xl py-5 space-y-8 mx-auto'>
        <H2>Add Note</H2>
        <Form form={form} onSubmit={onSubmit} isPending={isPending} />
      </div>
    </Wrapper>
  );
};

export default CreateNote;
