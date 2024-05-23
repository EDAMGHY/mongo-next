"use client";

import { getNotes } from "@/app/actions/note";
import { useQuery } from "@tanstack/react-query";

export const useGetNotes = () =>
  useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
