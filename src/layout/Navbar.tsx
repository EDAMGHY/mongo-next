import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { AuthButton } from "./AuthButton";

const Navbar = () => {
  return (
    <nav className='sticky z-[50] border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 text-foreground top-0 left-0 w-full py-3'>
      <div className='container flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-3xl font-bold'>TasksApp</h1>
        </Link>
        <div className='flex items-center gap-4 justify-end'>
          <ul className='flex justify-start items-center gap-4'>
            <li className='group'>
              <Link className=' opacity-60 group-hover:opacity-100' href='/'>
                Home
              </Link>
            </li>
            <li className='group'>
              <Link
                className=' opacity-60 group-hover:opacity-100'
                href='/create'
              >
                Create
              </Link>
            </li>
            <li className='group'>
              <Link
                className=' opacity-60 group-hover:opacity-100'
                href='/about'
              >
                About
              </Link>
            </li>
          </ul>
          <ModeToggle />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
