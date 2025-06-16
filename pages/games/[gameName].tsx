// pages/games/[gameName].tsx   (Pages Router example)
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Footer, MenuLayout } from "../home"
import { games } from "../../lib/games";

// Phaser wrapper to apply config to Phaser game object
// const PhaserGame = dynamic(
//   () => import("./component/PhaserGame"),
//   { ssr: false }
// );

export default function GamePage() {
  
  // const { gameName } = useRouter().query as { gameName?: string }; // Fetch query
  // const [config, setConfig] = useState<Phaser.Types.Core.GameConfig | null>(null); // Config tied to phaser object


  // // Fetch gameConfigs
  // useEffect(() => {
  //   if (!gameName) return;

  //   (async () => {
  //     const { gameConfigs } = await import("../../lib/gameConfigs");
  //     setConfig(gameConfigs[gameName]);
  //   })();
  // }, [gameName]);

  // // Fetch title
  // const title = games.find(g => g.gameName === gameName)?.title ?? gameName;



  return (
    <MenuLayout>
      <main className="flex flex-col flex-grow pt-24 px-6 bg-stone-900 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">
          ...
        </h1>

        {/* Render */}
        {/* {config ? (
          <div className="flex justify-center">
            <PhaserGame config={config} />
          </div>
        ) : (
          <p className="text-center text-stone-400">Under construction</p>
        )} */}
        <p className="text-center text-stone-400">Under construction issues with client side rending the Phaser library</p>
      </main>
      <Footer></Footer>
    </MenuLayout>
  );
}
