import { useEffect, useRef } from "react";
import Phaser from "phaser";

type Props = {
  config: Phaser.Types.Core.GameConfig;
};

export default function PhaserGame({ config }: Props) {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new Phaser.Game(config);
    }
    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [config]);

  return <div id={config.parent as string} className="w-full h-full" />;
}
