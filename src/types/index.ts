import { LinkProps } from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
import { formSchema, loginFormSchema } from "@/lib/utils";
import { z } from "zod";

export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
}

export type ITaskValues = Omit<ITask, "id">;

export interface ITypography {
  children: ReactNode;
  className?: string;
}
export interface IWrapper extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export interface ILink extends LinkProps, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export interface IForm {
  onSubmit: SubmitHandler<ITaskValues>;
  form: FormProps;
  isPending?: boolean;
  dataFetched?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface FormProps extends FieldValues {
  children?: any;
}

export type IFormSchema = z.infer<typeof formSchema>;
export type ILoginFormSchema = z.infer<typeof loginFormSchema>;
