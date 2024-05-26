"use client";

import { getNote, updateNote } from "@/actions/note";
import { H1 } from "@/components/ui";
import { Wrapper } from "@/components/widgets";
import { Form } from "@/components/widgets/Form";
import { formSchema } from "@/lib/utils";
import { INote, IFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const NoteDetails = () => {
  const { id } = useParams();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const {
    data: note = {} as INote,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getNote(id as string, userId as string),
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
    mutationFn: () => updateNote(id as string, { ...form.getValues(), userId }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.invalidateQueries({ queryKey: ["note"] });
      revalidatePath(`/notes/${id}`);
      revalidatePath(`/`);
    },
  });

  const onSubmit = (data: IFormSchema) => {
    const formData = { ...data, userId };
    updateNoteMutation(id as any, formData as any);
    router.push("/");
  };

  return (
    <Wrapper className='py-5 space-y-8 '>
      <H1>Note Details {id}</H1>
      <Form form={form} onSubmit={onSubmit} isPending={isPending} />
    </Wrapper>
  );
};

export default NoteDetails;
