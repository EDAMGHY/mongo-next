"use client";

import { H1 } from "@/components/ui";
import { TasksCards, Wrapper } from "@/components/widgets";

export default function Home() {
  return (
    <Wrapper className='space-y-6'>
      <H1>Dashboard</H1>
      <TasksCards />
    </Wrapper>
  );
}
