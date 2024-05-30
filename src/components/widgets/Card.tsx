import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { FC } from "react";
import Link from "next/link";
import { FaPen, FaTrash } from "react-icons/fa";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

export const Card: FC<
  ITask & {
    onToggleCompletedTask: (id: string, completed: boolean) => void;
    handleDeleteTask: (id: string) => void;
  }
> = ({
  id,
  title,
  description,
  completed,
  handleDeleteTask,
  onToggleCompletedTask,
}) => {
  return (
    <div className='gap-2 overflow-hidden flex justify-start items-center border border-gray-200 rounded-md dark:border-gray-800'>
      <button
        onClick={() => onToggleCompletedTask(id, completed)}
        className='size-8 flex justify-center items-center bg-gray-700 rounded-r-md'
      >
        {completed ? (
          <AiOutlineCheckCircle size={20} />
        ) : (
          <AiOutlineCloseCircle size={20} />
        )}
      </button>
      <div className='py-4 px-2 flex-1'>
        {title && (
          <h2
            className={cn("text-xl", {
              "line-through filter blur-[1px]": completed,
            })}
          >
            {title}
          </h2>
        )}
        {description && (
          <p
            className={cn("text-gray-400 dark:text-gray-500 text-sm", {
              "line-through filter blur-[1px]": completed,
            })}
          >
            {description}
          </p>
        )}
      </div>

      <div className='h-full text-white grid-cols-1 grid'>
        <Link
          href={`/tasks/${id}`}
          className='bg-gray-800 inline-flex items-center justify-center h-full px-4'
        >
          <FaPen className='size-4' />
        </Link>
        <button
          onClick={() => handleDeleteTask(id)}
          className='bg-destructive h-full px-4'
        >
          <FaTrash className='size-4' />
        </button>
      </div>
    </div>
  );
};
