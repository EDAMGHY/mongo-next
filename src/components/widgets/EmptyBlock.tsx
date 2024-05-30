import React from "react";
import { FaBan } from "react-icons/fa";

const EmptyBlock = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-8 md:p-12 lg:p-16'>
      <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-full'>
        <FaBan className='size-10 text-gray-500 dark:text-gray-400' />
      </div>
      <div className='text-center'>
        <h3 className='text-xl font-semibold'>No data to display</h3>
        <p className='text-gray-500 dark:text-gray-400'>
          It looks like there are no items to show at the moment.
        </p>
      </div>
    </div>
  );
};

export default EmptyBlock;
