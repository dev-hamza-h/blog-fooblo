import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="max-w-screen-2xl mx-auto bg-red-600 text-white text-xs md:text-sm flex justify-center items-center px-2 py-2 space-x-2 z-[100] fixed top-0 left-0 right-0 ">
        <span>Sign up today and never miss a new post.</span>
        <a href="#" className="underline hover:text-green-300">
          Sign Up Now
        </a>
      </div>

      <header className="flex justify-between fixed top-[30px] left-0 right-0 z-50 px-10 py-4 bg-green-500 max-w-screen-2xl mx-auto">
        {/* LOGO CONTENT */}
        <div className="flex ml-0 md:ml-10">
          <h1 className="mt-2 text-2xl font-extrabold text-red-600">
            FOO<span className="text-black">BLO</span>
          </h1>
        </div>
        {/* LINK */}
        <div>
          <ul className="hidden md:block">
            <li className="mt-2 mx-2 space-x-4 text-xl text-black font-serif">
              <Link href="/" className="link-hover">
                Home
              </Link>
              <Link href="/blog" className="link-hover">
                Blog
              </Link>
              <Link href="/about" className="link-hover">
                About
              </Link>

              <Link href="/contact" className="link-hover">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/*MENU CONTENT*/}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="text-black w-8 h-8" />
          </SheetTrigger>
          <SheetContent className="bg-green-100 text-black p-0">
            <div
              className="flex items-center mb-4 ml-0"
              style={{ marginLeft: 0, paddingLeft: 0 }}
            >
              <h1 className="text-xl font-extrabold text-red-600 ml-2 mt-12">
                FOO<span className="text-black">BLO</span>
              </h1>
            </div>
            <ul className="mt-4 font-serif">
              <li className="mb-2 ml-3">
                <SheetClose asChild>
                  <Link href="/" className="link-hover">
                    Home
                  </Link>
                </SheetClose>
              </li>
              <li className="mb-2 ml-3">
                <SheetClose asChild>
                  <Link href="/blog" className="link-hover">
                    Blog
                  </Link>
                </SheetClose>
              </li>
              <li className="mb-2 ml-3">
                <SheetClose asChild>
                  <Link href="/about" className="link-hover">
                    About
                  </Link>
                </SheetClose>
              </li>

              <li className="mb-2 ml-3">
                <SheetClose asChild>
                  <Link href="/contact" className="link-hover">
                    Contact
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
