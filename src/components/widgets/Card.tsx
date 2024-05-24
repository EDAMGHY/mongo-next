import {
  Card as CardComponent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { INote } from "@/types";
import { FC } from "react";
import { Button } from "../ui/button";
import { Link } from "../ui/link";

export const Card: FC<INote & { handleDeleteNote: (id: string) => void }> = ({
  id,
  title,
  description,
  completed,
  handleDeleteNote,
}) => {
  return (
    <CardComponent>
      <CardHeader className='overflow-hidden'>
        {title && (
          <CardTitle
            className={cn({ "line-through filter blur-[2px]": completed })}
          >
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription
            className={cn({ "line-through filter blur-[2px]": completed })}
          >
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardFooter className='justify-end gap-4'>
        <Link href={`/notes/${id}`} variant='secondary'>
          Edit
        </Link>
        <Button onClick={() => handleDeleteNote(id)} variant='destructive'>
          Delete
        </Button>
      </CardFooter>
    </CardComponent>
  );
};
