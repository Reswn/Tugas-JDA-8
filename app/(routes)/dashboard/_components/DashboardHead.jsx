"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

function DashboardHead() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-white p-5 shadow-sm border-b flex justify-between items-center">
      <div className="text-gray-700 font-medium">Search Bar</div>

      {session?.user && (
        <div className="flex items-center gap-3">
          <Image
            src={session.user.image || "/default-avatar.png"}
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-sm text-gray-600">{session.user.name}</span>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default DashboardHead;
