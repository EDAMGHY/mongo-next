import { Link } from "@/components/ui/link";
import { H1 } from "@/components/ui/typography";
import Card from "@/components/widgets/Card";
import Wrapper from "@/components/widgets/wrapper";
import { notes } from "@/data";
import { INote } from "@/types";

export default function Home() {
  return (
    <Wrapper className='space-y-6'>
      <H1>Dashboard</H1>
      <div className='grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {notes.map((note: INote, index: number) => (
          <Card key={index + 1} {...note} />
        ))}
      </div>
    </Wrapper>
  );
}
