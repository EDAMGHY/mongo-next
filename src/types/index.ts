import { LinkProps } from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
import { formSchema } from "@/lib/utils";
import { z } from "zod";

export interface INote {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type INoteValues = Omit<INote, "id">;

export interface ITypography {
  children: ReactNode;
}
export interface IWrapper extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export interface ILink extends LinkProps, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export interface IForm {
  onSubmit: SubmitHandler<INoteValues>;
  form: FormProps;
  isPending: boolean;
}

export interface FormProps extends FieldValues {
  children?: any;
}

export type IFormSchema = z.infer<typeof formSchema>;
