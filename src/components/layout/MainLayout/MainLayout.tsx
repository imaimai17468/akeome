import { Fireworks } from "@/components/common/Fireworks";
import { Footer } from "@/components/common/Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Fireworks />
      <main className="min-h-screen flex items-center justify-center flex-col">
        <div>{children}</div>
        <div className="z-10 fixed bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </>
  );
};
