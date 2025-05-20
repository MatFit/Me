import { useRouter } from 'next/router';
import { MenuLayoutWithChildren } from '../home';
import { games } from "../../lib/games.ts";


export default function GamePage() {
  const { query } = useRouter()
  const { gameName } = query

  const game = games.find(g => g.gameName === gameName);
  const title = game ? game.title : gameName; // fallback

  return (
    <MenuLayoutWithChildren>
     <main className="min-h-screen bg-stone-900 text-white">
      <div className="pt-20">  
        <h1 className="text-3xl font-bold mb-4 text-center"> {title}</h1>
        <iframe
          src={`/public/games/${gameName}/index.html`}
          className="w-full h-[80vh] border"
          title={gameName as string}
        />
      </div>
    </main>
    </MenuLayoutWithChildren>
  )
}
