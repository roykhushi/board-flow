"use client";

import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
        <div className="hidden lg:flex lg:flex-1">

        </div>

        <div>
            <UserButton />
        </div>
    </div>
  )
}

export default Navbar