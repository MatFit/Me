import { mancalaConfig }   from "../public/games/mancala/config";
import { puzzleBoxConfig } from "../public/games/puzzle-box/config";

export const gameConfigs: Record<string, Phaser.Types.Core.GameConfig> = {
  "mancala":     mancalaConfig,
  "puzzle-box":  puzzleBoxConfig,
};