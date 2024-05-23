"use server";

import prisma from "@/prisma";

// CREATE A NOTE
export const createNote = () =>
  prisma.note.create({
    data: {
      title: "My new note",
      description: "My new note description",
    },
  });

// GET ALL NOTES
export const getNotes = () => prisma.note.findMany();
