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

const navItems = [
  { title: "Home", href: "#" },
  { title: "Agenda", href: "#" },
  { title: "Speakers", href: "#" },
  { title: "Contact us", href: "#" },
];

const Navbar = () => {
  return (
    <section className="py-8 px-4">
      <div className="">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center w-full justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" className="max-w-64" alt="logo" />
            </div>
            <div className="flex items-center">
              {navItems.map((item) => (
                <a
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
                </a>
              ))}
            </div>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://www.indiahrsummit.com/wp-content/uploads/2024/09/HR-Logo-01.png"
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
                      <img
                        src="https://www.indiahrsummit.com/wp-content/uploads/2024/09/HR-Logo-01.png"
                        className="max-w-64"
                        alt="logo"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="font-semibold"
                    >
                      {item.title}
                    </a>
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
