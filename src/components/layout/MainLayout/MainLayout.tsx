import { Fireworks } from '@/components/common/Fireworks';
import { Footer } from '@/components/common/Footer';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Fireworks />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>{children}</div>
        <div className="fixed bottom-0 z-10 w-full">
          <Footer />
        </div>
      </main>
    </>
  );
};
