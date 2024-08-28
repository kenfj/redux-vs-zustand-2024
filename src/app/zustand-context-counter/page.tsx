import { Footer } from "@/components";
import { ZustandContextCounter } from "@/components/zustand-context";

export default function ZustandContextCounterPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="">Zustand Context Counter</h1>

      <ZustandContextCounter />

      <hr className="h-px w-1/2 border-1" />

      <Footer />
    </main>
  );
}
