import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='border-t py-5 border-border/80'>
      <div className='container space-y-6'>
        <div className='flex items-center gap-5 justify-between'>
          <h1 className='text-3xl font-bold'>TasksApp</h1>
          <ul className='flex justify-start items-center gap-2'>
            <li>
              <Link
                className='bg-gray-800 inline-block p-1 rounded dark:bg-white dark:text-gray-800 text-white'
                href='https://linedin.com/in/abdellah-damri'
              >
                <Linkedin size={18} />
              </Link>
            </li>
            <li>
              <Link
                className='bg-gray-800 inline-block p-1 rounded dark:bg-white dark:text-gray-800 text-white'
                href='https://github.com/EDAMGHY'
              >
                <Github size={18} />
              </Link>
            </li>
            <li>
              <Link
                className='bg-gray-800 inline-block p-1 rounded dark:bg-white dark:text-gray-800 text-white'
                href='https://x.com/abdellah-damri'
              >
                <Twitter size={18} />
              </Link>
            </li>
          </ul>
        </div>

        <hr className='h-px w-full bg-border/80' />
        <p className='text-center'>
          Copyright for <b>TasksApp</b> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
