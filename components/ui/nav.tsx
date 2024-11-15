import { Menu } from "lucide-react";
import {} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { title: "Home", href: "#home" },
  { title: "Agenda", href: "#agenda" },
  { title: "Speakers", href: "#speakers" },
  { title: "Contact us", href: "#location" },
];

const Navbar = () => {
  return (
    <section className="py-8 px-4">
      <div className="">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center w-full justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                height={150}
                width={150}
                src="/logo.png"
                className="max-w-64"
                alt="logo"
              />
            </div>
            <div className="flex items-center">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    })
                  )}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                height={100}
                width={100}
                src="/logo.png"
                className="max-w-64"
                alt="logo"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <Image
                        height={100}
                        width={100}
                        src="/logo.png"
                        className="max-w-64"
                        alt="logo"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="font-semibold"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
