import { Footer } from "@/components";
import { ReduxCounter } from "@/components/redux";

export default function ReduxCounterPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="">Redux Counter</h1>

      <ReduxCounter />

      <hr className="h-px w-1/2 border-1" />

      <Footer />
    </main>
  );
}
