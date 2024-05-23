import { cn } from "@/lib/utils";
import { IWrapper } from "@/types";
import { FC } from "react";

export const Wrapper: FC<IWrapper> = ({ className, children, ...rest }) => {
  return (
    <section
      className={cn("w-full min-h-[calc(100vh-100px-150px)]", className)}
      {...rest}
    >
      {children}
    </section>
  );
};
