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
} from "@/components/ui";
import { FC } from "react";
import { IForm } from "@/types";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

export const Form: FC<IForm> = ({
  form,
  onSubmit,
  children,
  className,
  isPending = false,
  dataFetched,
}) => {
  return (
    <CForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
      >
        {children ? (
          children
        ) : (
          <>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={dataFetched}
                      placeholder='Enter Title...'
                      {...field}
                    />
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
                      disabled={dataFetched}
                      placeholder='Enter Description...'
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
                      disabled={dataFetched}
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
          </>
        )}
      </form>
    </CForm>
  );
};
