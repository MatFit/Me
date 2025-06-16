import { useEffect, useRef } from "react";

type Props = {
  config: Phaser.Types.Core.GameConfig;
};

export default function PhaserGame({ config }: Props) {
  const loadPhaser = async() => {
    const Phaser = (await import('phaser')).default;
  }
  
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
