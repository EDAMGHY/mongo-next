"use client";

import {
  Form as CForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Button,
  FormMessage,
  Input,
  Textarea,
  Checkbox,
  Link,
} from "@/components/ui";
import { FC } from "react";
import { IForm } from "@/types";
import { Home, Loader } from "lucide-react";

export const Form: FC<IForm> = ({ form, onSubmit, isPending = false }) => {
  return (
    <CForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us a little bit about yourself'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='completed'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Completed</FormLabel>
            </FormItem>
          )}
        />
        <Button type='submit'>
          {isPending && <Loader size={18} />}
          Submit
        </Button>
      </form>
    </CForm>
  );
};
