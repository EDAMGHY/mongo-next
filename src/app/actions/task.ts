"use server";

import prisma from "@/prisma";
import { ITaskValues } from "@/types";

// CREATE A TASK
export const createTask = async (data: ITaskValues) =>
  await prisma.task.create({
    data,
  });

// GET ALL TASKS
export const getTasks = async (userId: string) =>
  await prisma.task.findMany({
    where: {
      userId,
    },
  });

// GET SINGLE TASK
export const getTask = async (id: string, userId: string) =>
  await prisma.task.findFirst({ where: { id, userId } });

// UPDATE A TASK
export const updateTask = async (id: string, data: ITaskValues) =>
  await prisma.task.update({ where: { id }, data });

// TOGGLE COMPLETED TASK
export const toggleCompletedTask = async ({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) => {
  console.log("completed", { completed, id });
  return await prisma.task.update({
    where: { id },
    data: {
      completed: !completed,
    },
  });
};

// DELETE A TASK
export const deleteTask = async (id: string, userId: string) =>
  await prisma.task.delete({ where: { id, userId } });
