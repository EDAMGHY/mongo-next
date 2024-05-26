"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { useSession, signOut, signIn } from "next-auth/react";

export const AuthButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <>
      {session.user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                {session.user?.image && (
                  <AvatarImage
                    src={session.user?.image}
                    alt={session.user?.name || ""}
                  />
                )}
                <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant='destructive' onClick={() => signOut()}>
            Sign out
          </Button>
        </>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </>
  );
};
