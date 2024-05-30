"use client";

import { Button, Link } from "@/components/ui";
import { Wrapper } from "@/components/widgets";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <Wrapper className='flex justify-center items-center h-full flex-col gap-4 p-8 md:p-12 lg:p-16'>
      <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-full'>
        <FaExclamationTriangle className='size-10 text-red-500 dark:text-red-400' />
      </div>
      <div className='text-center'>
        <h3 className='text-2xl font-bold'>
          Error 500: There is an unexpected error
        </h3>
        <p className='text-gray-500 dark:text-gray-400 mt-2'>
          Oops, it looks like the resource you&apos;re looking for doesn&apos;t
          exist. Let&apos;s get you back on track.
        </p>
      </div>
      <div className='flex gap-4 mt-6'>
        <Link variant='secondary' href='/'>
          Go to Home
        </Link>
        <Button variant='outline'>Contact Support</Button>
      </div>
    </Wrapper>
  );
}
