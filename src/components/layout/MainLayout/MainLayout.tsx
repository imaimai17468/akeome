import { Fireworks } from "@/components/common/Fireworks";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Fireworks />
      <div>
        <main className="min-h-screen flex items-center justify-center z-50">
          {children}
        </main>
      </div>
    </>
  );
};
