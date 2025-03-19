"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle.tsx";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild={true}>
                <Button variant="outline" className={"md:hidden cursor-pointer"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 shadow-none">
                <SheetTitle className="sr-only">Mobile nav</SheetTitle>
                <SheetDescription className={"sr-only"}>
                    This is mobile nav only show up in mobile
                </SheetDescription>
                <nav>
                    <ul className={"pt-20 pb-6 flex flex-col gap-y-5"}>
                        <li>
                            <a href={"#about"}>About</a>
                        </li>
                        <li>
                            <a href={"#experiences"}>Experiences</a>
                        </li>
                        <li>
                            <a href={"#projects"}>Projects</a>
                        </li>
                        <li>
                            <a href={"#contact"}>Contact</a>
                        </li>
                    </ul>
                    <hr />
                </nav>
                <div className={"flex justify-between items-center"}>
                    <p>Switch Theme</p>
                    <ThemeToggle />
                </div>
                <Button>Download CV</Button>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
