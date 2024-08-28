import { Footer } from "@/components";
import { ReduxCount, ReduxReset } from "@/components/redux";
import { ZustandCount, ZustandReset } from "@/components/zustand";
import { ZustandContextCount, ZustandContextReset } from "@/components/zustand-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
      <h1>Redux VS Zustand Counters</h1>

      <div className="flex gap-3">
        <ReduxCount /> <ReduxReset />
      </div>

      <div className="flex gap-3">
        <ZustandCount /> <ZustandReset />
      </div>

      <div className="flex gap-3">
        <ZustandContextCount /> <ZustandContextReset />
      </div>

      <hr className="h-px w-1/2 border-1" />

      <Footer />
    </main>
  );
}
