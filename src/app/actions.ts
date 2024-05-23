"use server";

import prisma from "@/prisma";

export const createNote = async () => {
  try {
    const note = await prisma.note.create({
      data: {
        title: "My new note",
        description: "My new note description",
      },
    });
    return note;
  } catch (err) {
    console.log(err);
  }
};
