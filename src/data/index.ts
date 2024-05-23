import { randomString } from "@/lib/utils";
import { INote } from "@/types";

export const notes: INote[] = [
  {
    id: randomString(),
    title: "My first note",
    description: "My first note description",
    completed: false,
  },
  {
    id: randomString(),
    title: "My second note",
    description: "My second note description",
    completed: true,
  },
  {
    id: randomString(),
    title: "My third note",
    description: "My third note description",
    completed: false,
  },
  {
    id: randomString(),
    title: "My fourth note",
    description: "My fourth note description",
    completed: true,
  },
];
