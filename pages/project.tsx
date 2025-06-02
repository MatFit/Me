import { MenuLayout } from "./home";
import { Footer } from "./home";

export default function Projects() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <MenuLayout>
        <div className="w-full px-4 animate-fade-in">
          <div className="pt-20 flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-white">Projects</h1>
          <h4 className="text-sm font-mono"> Everything I've done so far</h4>

          
          </div>
        </div>
      </MenuLayout>
      <Footer></Footer>
    </main>
  );
}