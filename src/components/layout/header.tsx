import Link from "next/link";
import Logo from "../brand/logo";
import { routes } from "@/constants";

export default function Header() {
  return (
    <div className="h-[75px] w-full fixed top-0 left-0 right-0 mx-auto z-[50] px-[0.75rem]">
      <div className="relative">
        <div className="absolute w-full mx-auto left-0 right-0 top-0 max-w-[1200px] h-[40px] blur-[40px] bg-white" />
        <div
          className={
            "fixed w-full mx-auto left-0 top-0 right-0 xs:max-w-[1200px] max-w-[410px] h-[40px] bg-transparent backdrop-blur-sm z-[1]"
          }
        />

        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full xs:max-w-[1200px] max-w-[410px] h-[45px] rounded-full border border-black/20 z-[999] bg-white/50 mx-auto flex items-center justify-center before:w-full before:h-full before:bg-black/5 before:absolute before:rounded-full before:backdrop-blur-xl">
          <div className="flex flex-row items-center justify-between w-full px-2 relative z-[5]">
            <Link
              href={"/"}
              className="flex flex-row items-center justify-center rounded-full gap-x-3 mx-1 text-black"
            >
              <div>
                <Logo width={100} fill="currentColor" />
              </div>
            </Link>

            <div className="sm:flex hidden flex-row items-center justify-center gap-x-5 text-[13px]  text-neutral-700">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  href={route.path}
                  className="py-1 px-3 rounded-full  hover:text-black"
                >
                  {route.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-row gap-x-2 items-center justify-center">
              <div className="py-1 px-3 rounded-full bg-black text-white">
                Source Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
