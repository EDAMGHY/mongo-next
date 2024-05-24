"use server";

import prisma from "@/prisma";
import { INoteValues } from "@/types";

// CREATE A NOTE
export const createNote = async (data: INoteValues) =>
  await prisma.note.create({
    data,
  });

// GET ALL NOTES
export const getNotes = async () => await prisma.note.findMany();

// GET SINGLE NOTE
export const getNote = async (id: string) =>
  await prisma.note.findFirst({ where: { id } });

// GET ALL NOTES
export const updateNote = async (id: string, data: INoteValues) =>
  await prisma.note.update({ where: { id }, data });

// GET ALL NOTES
export const deleteNote = async (id: string) =>
  await prisma.note.delete({ where: { id } });
