import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomString = () => (Math.random() + 1).toString(36).substring(3);

const MIN_TITLE = 5;
const MIN_DESCRIPTION = 20;

export const formSchema = z.object({
  title: z.string().min(MIN_TITLE, {
    message: `Title must be at least ${MIN_TITLE} characters.`,
  }),
  description: z.string().min(MIN_DESCRIPTION, {
    message: `Title must be at least ${MIN_DESCRIPTION} characters.`,
  }),
  completed: z.boolean(),
});
