"use server";

import prisma from "@/prisma";
import { INoteValues } from "@/types";

// CREATE A NOTE
export const createNote = async (data: INoteValues) =>
  await prisma.note.create({
    data,
  });

// GET ALL NOTES
export const getNotes = async (userId: string) =>
  await prisma.note.findMany({
    where: {
      userId,
    },
  });

// GET SINGLE NOTE
export const getNote = async (id: string, userId: string) =>
  await prisma.note.findFirst({ where: { id, userId } });

// GET ALL NOTES
export const updateNote = async (id: string, data: INoteValues) =>
  await prisma.note.update({ where: { id }, data });

// GET ALL NOTES
export const deleteNote = async (id: string, userId: string) =>
  await prisma.note.delete({ where: { id, userId } });
