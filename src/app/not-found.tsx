"use client";
import { Wrapper } from "@/components/widgets";
import Link from "next/link";
import { FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

export default function Component() {
  return (
    <Wrapper className='flex flex-col items-center justify-center px-4 md:px-6'>
      <div className='max-w-md text-center space-y-4'>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800'>
          <FaExclamationTriangle
            size={24}
            className='text-gray-500 dark:text-gray-400'
          />
        </div>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
          Page Not Found
        </h1>
        <p className='text-gray-500 dark:text-gray-400'>
          The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved or deleted.
        </p>
        <Link
          className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
          href='/'
        >
          Go back home
        </Link>
      </div>
    </Wrapper>
  );
}
