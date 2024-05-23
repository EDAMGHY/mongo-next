"use client";
import { H1, H2 } from "@/components/ui/typography";
import Wrapper from "@/components/widgets/wrapper";
import { useParams } from "next/navigation";

const NoteDetails = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <H2>Note Details {id}</H2>
    </Wrapper>
  );
};

export default NoteDetails;
