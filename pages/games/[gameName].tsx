// pages/games/[gameName].tsx   (Pages Router example)
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MenuLayoutWithChildren } from "../home"
import { games } from "../../lib/games";

// client‑only Phaser wrapper
const PhaserGame = dynamic(
  () => import("./component/PhaserGame"),
  { ssr: false }
);

export default function GamePage() {
  const { gameName } = useRouter().query as { gameName?: string };
  const [config, setConfig] =
  useState<Phaser.Types.Core.GameConfig | null>(null);

  useEffect(() => {
    if (!gameName) return;

    (async () => {
      const { gameConfigs } = await import("../../lib/gameConfigs");
      setConfig(gameConfigs[gameName]);
    })();
  }, [gameName]);

  const title = games.find(g => g.gameName === gameName)?.title ?? gameName;

  return (
    <MenuLayoutWithChildren>
      <main className="flex flex-col flex-grow pt-24 px-6 bg-stone-900 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">
          {title}
        </h1>

        {config ? (
          <div className="flex justify-center">
            <PhaserGame config={config} />
          </div>
        ) : (
          <p className="text-center text-stone-400">Loading…</p>
        )}
      </main>
    </MenuLayoutWithChildren>
  );
}
