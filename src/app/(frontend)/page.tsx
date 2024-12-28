import BgBlur from "@/components/ui/bgBlur";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center text-center relative">
      <div className="relative flex items-center justify-center w-full h-screen">
        <BgBlur animated seed={56} />
        <div className="relative z-[1] flex flex-col items-center justify-center gap-y-5">
          <div className="md:text-7xl text-3xl max-w-5xl font-bold">
            Production-grade Next.JS 15 Frontend Template
          </div>
          <div className="md:text-2xl">AX-Next is a production-ready front-end template for your Next.JS App</div>
          <div className="flex md:flex-row flex-col w-full items-center justify-center gap-5">
            <div className="p-3 rounded-full bg-neutral-200 border border-black/20 font-mono max-w-sm truncate">
              npx ax-next@latest init [my-app]
            </div>
            <div className="p-3 rounded-full bg-black text-white">Source Code</div>
          </div>
        </div>
      </div>
    </div>
  );
}
