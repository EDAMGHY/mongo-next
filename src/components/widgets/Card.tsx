import {
  Card as CardComponent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { INote } from "@/types";
import { FC } from "react";
import { Button } from "../ui/button";
import { Link } from "../ui/link";

const Card: FC<INote> = ({ id, title, description, completed }) => {
  return (
    <CardComponent>
      <CardHeader>
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
        <Button variant='destructive'>Delete</Button>
      </CardFooter>
    </CardComponent>
  );
};

export default Card;
