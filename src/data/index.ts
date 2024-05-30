import { randomString } from "@/lib/utils";
import { ITask } from "@/types";

export const tasks: ITask[] = [
  {
    id: randomString(),
    title: "My first task",
    description: "My first task description",
    completed: false,
    userId: "1",
  },
  {
    id: randomString(),
    title: "My second task",
    description: "My second task description",
    completed: true,
    userId: "1",
  },
  {
    id: randomString(),
    title: "My third task",
    description: "My third task description",
    completed: false,
    userId: "1",
  },
  {
    id: randomString(),
    title: "My fourth task",
    description: "My fourth task description",
    completed: true,
    userId: "1",
  },
];
