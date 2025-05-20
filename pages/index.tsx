import { MenuLayout } from "./home";
import { Footer } from "./home";

const games = [
  { title: "Jump Run",   slug: "jump-run" },
  { title: "Puzzle Box", slug: "puzzle-box" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <MenuLayout></MenuLayout>
      <Footer></Footer>
    </main>
  );
}
