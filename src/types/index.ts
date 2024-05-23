import { LinkProps } from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export interface INote {
  id: any;
  title: string;
  description: string;
  completed: boolean;
}

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
