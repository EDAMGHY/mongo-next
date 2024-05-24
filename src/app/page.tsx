"use client";

import { H1 } from "@/components/ui";
import { NotesCards, Wrapper } from "@/components/widgets";

export default function Home() {
  return (
    <Wrapper className='space-y-6'>
      <H1>Dashboard</H1>
      <NotesCards />
    </Wrapper>
  );
}
