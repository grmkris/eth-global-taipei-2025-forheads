import type { CharacterSchema } from "@/server/db/schema";

export const level2PromptGenerator = (props: {
  characterSheet: CharacterSchema;
}) => {
  const { characterSheet } = props;
  return `
  The player has the following character sheet:
  ${JSON.stringify(characterSheet)}

  The Memory Maze
Described passages shift and change based on decisions. Players must track their path through detailed text descriptions:

"You notice three markings on the wall: a serpent, a crown, and a key. Which do you touch?"
Your character's wisdom attribute might provide better recall of previously visited areas.
  `;
};
