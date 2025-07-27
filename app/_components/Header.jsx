"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="p-5 flex justify-between items-center border-b shadow-sm">
      <Image
        src="/logo.svg"
        alt="Expense Tracker Logo"
        width={160}
        height={100}
      />

      {session?.user ? (
        <div className="flex items-center gap-4">
          <p className="text-sm">{session.user.name}</p>
          <Button onClick={() => signOut()}>Logout</Button>
        </div>
      ) : (
        <Button onClick={() => signIn()}>Get Started</Button>
      )}
    </div>
  );
}

export default Header;
