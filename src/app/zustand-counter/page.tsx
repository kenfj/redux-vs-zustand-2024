import { Footer } from "@/components";
import { ZustandCounter } from "@/components/zustand";

export default function ZustandCounterPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="">Zustand Counter</h1>

      <ZustandCounter />

      <hr className="h-px w-1/2 border-1" />

      <Footer />
    </main>
  );
}
