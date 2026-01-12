import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-background flex items-center justify-between px-5 py-6">
      <Link href="/">
        <Image src="logo.svg" alt="Aparatus" width={91} height={24} />
      </Link>
      <div className="flex items-center gap-2">
        <Link href="/">
          <Button className="cursor-pointer" variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
