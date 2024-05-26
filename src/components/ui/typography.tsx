import { cn } from "@/lib/utils";
import { ITypography } from "@/types";
import { FC } from "react";

export const H1: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 border-b pb-4 text-3xl font-bold tracking-tight lg:text-4xl",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export const H3: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H4: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight",
        className
      )}
      {...rest}
    >
      {children}
    </h4>
  );
};

export const Paragraph: FC<ITypography> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export const List: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...rest}>
      {children}
    </ul>
  );
};

export const Code: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </code>
  );
};

export const Lead: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
};

export const Large: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <div className={cn("text-lg font-semibold", className)} {...rest}>
      {children}
    </div>
  );
};
export const Small: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...rest}
    >
      {children}
    </small>
  );
};

export const Muted: FC<ITypography> = ({ children, className, ...rest }) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
};
