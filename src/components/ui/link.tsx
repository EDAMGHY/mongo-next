import { buttonVariants } from "@/components/ui";
import { ILink } from "@/types";
import { default as NextLink } from "next/link";
import { FC } from "react";

export const Link: FC<ILink> = ({ variant, size, children, ...rest }) => {
  return (
    <NextLink className={buttonVariants({ variant, size })} {...rest}>
      {children}
    </NextLink>
  );
};
