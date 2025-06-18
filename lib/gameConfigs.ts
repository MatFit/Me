import { mancalaConfig }   from "../public/games/mancala/config";
import { puzzleBoxConfig } from "../public/games/puzzle-box/config";

const loadPhaser = async () => {
  const Phaser = (await import("phaser")).default;
  return Phaser;
};

export const gameConfigs: Record<string, Phaser.Types.Core.GameConfig> = {
  "mancala":     mancalaConfig,
  "puzzle-box":  puzzleBoxConfig,
};

// import { useEffect, useRef } from "react";

// type Props = {
//   config: Phaser.Types.Core.GameConfig;
// };

// export default function PhaserGame({ config }: Props) {
//   const loadPhaser = async() => {
//     const Phaser = (await import('phaser')).default;
//   }
  
//   const gameRef = useRef<Phaser.Game | null>(null);

//   useEffect(() => {
//     if (!gameRef.current) {
//       gameRef.current = new Phaser.Game(config);
//     }
//     return () => {
//       gameRef.current?.destroy(true);
//       gameRef.current = null;
//     };
//   }, [config]);

//   return <div id={config.parent as string} className="w-full h-full" />;
// }
