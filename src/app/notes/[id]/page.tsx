"use client";

import { getNote, updateNote } from "@/actions/note";
import { H2 } from "@/components/ui";
import { Wrapper } from "@/components/widgets";
import { Form } from "@/components/widgets/Form";
import { formSchema } from "@/lib/utils";
import { INote, IFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { revalidatePath } from "next/cache";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const NoteDetails = () => {
  const { id } = useParams();

  const {
    data: note = {} as INote,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getNote(id as string),
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
    form.setValue("title", note?.title || "");
    form.setValue("description", note?.description || "");
    form.setValue("completed", note?.completed ?? false);
  }, [note, id]);

  const queryClient = useQueryClient();

  // Mutations
  const { mutate: updateNoteMutation, isPending } = useMutation({
    mutationFn: () => updateNote(id as string, form.getValues()),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["note"] });
      revalidatePath(`/notes/${id}`);
      revalidatePath(`/`);
    },
  });

  const onSubmit = (data: IFormSchema) => {
    updateNoteMutation(id as any, data as any);
    router.push("/");
  };

  return (
    <Wrapper>
      <div className='max-w-xl py-5 space-y-8 mx-auto'>
        <H2>Note Details {id}</H2>
        <Form form={form} onSubmit={onSubmit} isPending={isPending} />
      </div>
    </Wrapper>
  );
};

export default NoteDetails;
