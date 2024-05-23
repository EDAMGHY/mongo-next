"use client";

import { notes as DNotes } from "@/data";
import { INote } from "@/types";
import { Card } from "./Card";
import { useGetNotes } from "@/hooks";

export const NotesCards = () => {
  const { data = [], error, isLoading } = useGetNotes();
  console.log({ data, error, isLoading });
  return (
    <div className='grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {DNotes.map((note: INote, index: number) => (
        <Card key={index + 1} {...note} />
      ))}
    </div>
  );
};
