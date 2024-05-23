import { ITypography } from "@/types";
import { FC } from "react";

export const H1: FC<ITypography> = ({ children }) => {
  return (
    <h1 className='scroll-m-20 border-b pb-4 text-4xl font-bold tracking-tight lg:text-5xl'>
      {children}
    </h1>
  );
};

export const H2: FC<ITypography> = ({ children }) => {
  return (
    <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
      {children}
    </h2>
  );
};

export const H3: FC<ITypography> = ({ children }) => {
  return (
    <h3 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight'>
      {children}
    </h3>
  );
};

export const H4: FC<ITypography> = ({ children }) => {
  return (
    <h4 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight'>
      {children}
    </h4>
  );
};

export const Paraphraph: FC<ITypography> = ({ children }) => {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>;
};

export const List: FC<ITypography> = ({ children }) => {
  return <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>{children}</ul>;
};

export const Code: FC<ITypography> = ({ children }) => {
  return (
    <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
      {children}
    </code>
  );
};

export const Lead: FC<ITypography> = ({ children }) => {
  return <p className='text-xl text-muted-foreground'>{children}</p>;
};

export const Large: FC<ITypography> = ({ children }) => {
  return <div className='text-lg font-semibold'> {children}</div>;
};
export const Small: FC<ITypography> = ({ children }) => {
  return (
    <small className='text-sm font-medium leading-none'> {children}</small>
  );
};

export const Muted: FC<ITypography> = ({ children }) => {
  return <p className='text-sm text-muted-foreground'> {children}</p>;
};
