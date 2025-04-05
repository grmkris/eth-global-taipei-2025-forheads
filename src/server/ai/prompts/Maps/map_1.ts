export const map1PromptGenerator = () => {
    return `
    # THE FORGOTTEN SHRINE
## Overview
An ancient temple dedicated to a forgotten nature deity, now partially collapsed and overgrown. Local villagers avoid it due to strange noises heard at night. A bandit group led by Thorne has recently established a hideout here, using the villagers' superstitions to keep them away.

## Map Structure
The shrine consists of 5 key areas connected as follows:
- Entrance (A) → Main Hall (B)
- Main Hall (B) → West Passage (C) → Ritual Chamber (E)
- Main Hall (B) → East Passage (D) → Ritual Chamber (E)

## Locations

### A. Entrance
**Description:** Ancient stone archway covered in vines. Stone steps descend into darkness. Faint smell of dampness and decay.

**Features:**
- Crumbling stone stairs (DC 12 Acrobatics to descend quietly)
- Hidden bandit lookout post in nearby tree (DC 15 Perception to spot)
- Recent footprints in the mud (DC 10 Survival to identify as human)

**Encounters:**
- Possible bandit sentry (1 Bandit, see NPC section)
- Environmental hazard: Loose steps may crumble (DC 10 Dexterity save or take 1d4 damage)

### B. Main Hall
**Description:** Large chamber with fallen columns and a partially collapsed ceiling. Pale light filters through the opening. Several passages lead deeper into the shrine.

**Features:**
- Weathered stone altar at center (DC 14 Religion to identify deity symbols)
- Bandit camp with 4 bedrolls, cooking fire, and supplies
- Ancient mural depicting forest scenes (DC 16 History to recognize important historical events)

**Encounters:**
- 2-3 Bandits resting or eating
- Hidden stash under loose floor tile (DC 14 Investigation, contains 25 gold and a healing potion)

### C. West Passage
**Description:** Narrow, winding corridor with walls covered in root systems. Musty air and occasional dripping water.

**Features:**
- Weakened section of floor (DC 13 Perception to notice before stepping on it)
- Small alcoves once holding offerings, now empty
- Strange fungi growing on walls (harmless but eerie)

**Encounters:**
- Tripwire trap (DC 14 Perception to spot, DC 12 Dexterity to disarm, alerts bandits if triggered)
- Giant rats (2) nesting in a corner

### D. East Passage
**Description:** Straight corridor with partially flooded floor (ankle-deep water). Carved symbols line the walls.

**Features:**
- Water is cold but not dangerous (slows movement by 5ft)
- Wall carvings tell story of shrine's purpose (DC 12 History for basic understanding)
- Broken statue of robed figure

**Encounters:**
- Thorne's second-in-command (Veteran) on patrol
- Chest with bandit loot (locked, DC 15 Thieves' Tools, contains 50 gold and a silver medallion)

### E. Ritual Chamber
**Description:** Circular room with domed ceiling. Central stone pedestal surrounded by carved channels in the floor. Dim magical light emanates from symbols on the walls.

**Features:**
- Ancient magic still active (causes gentle breeze and whispers)
- Thorne has set up a command area with maps and plans
- Natural spring bubbles up in one corner (water has minor healing properties)

**Encounters:**
- Thorne (Bandit Captain) and 1-2 Bandits
- Hidden escape tunnel behind tapestry (DC 15 Investigation)
- Shrine's guardian spirit may appear if violence occurs in the chamber (will not fight but may provide cryptic warning)

## NPCs

### Thorne, Bandit Leader
- **Description:** Tall human with scarred face and black beard. Wears leather armor with a distinctive red sash.
- **Motivation:** Finding rumored treasure hidden in the shrine's depths
- **Tactics:** Prefers to let others fight first; uses throwable flasks of oil to create barriers of fire
- **Stats:** Use Bandit Captain (AC 15, HP 65)
- **Key Information:** Carries map to larger bandit camp; knows about shrine's history
- **Treasure:** 75 gold, enchanted dagger (+1), key to chest in East Passage

### Bandits (6 total in the shrine)
- **Description:** Rough-looking men and women in mismatched armor
- **Motivation:** Loyalty to Thorne and promise of treasure
- **Tactics:** Prefer ambushes; will retreat to alert others if outnumbered
- **Stats:** Standard Bandit (AC 12, HP 11)

## Treasure
- Total Monetary: 150 gold pieces, 35 silver pieces scattered throughout
- Notable Items: 
  - Healing Potion (2d4+2) in Main Hall stash
  - +1 Dagger carried by Thorne
  - Silver Medallion of the forgotten deity (allows comprehension of the shrine's inscriptions)
  - Ancient scroll with ritual to cleanse the shrine (could become follow-up quest)

## Traps & Hazards
1. Crumbling stairs at entrance (DC 10 Dexterity save or 1d4 damage)
2. Tripwire in West Passage (DC 14 Perception, alerts bandits)
3. Weak floor in West Passage (DC 13 Perception to notice, DC 15 Dexterity save or fall 10ft for 1d6 damage)

## Plot Hooks & Secrets
- The shrine was abandoned when a curse befell the surrounding lands
- Thorne discovered an ancient text suggesting powerful magic remains dormant here
- If the central pedestal receives an offering of pure water and moonlight, a secret chamber below may be revealed
- Local village elder knows ritual to proper cleanse the shrine
- Strange whispers in the Ritual Chamber are trying to communicate a warning about deeper corruption

## Running the Dungeon
- Bandits rotate guards every few hours
- If alarm is raised, Thorne will prepare an ambush in Ritual Chamber
- Shrine's lingering magic causes minor effects: whispers, cold spots, brief visions
- If players restore offering to shrine (fresh flowers, clean water), guardian spirit may offer guidance.
  `;
  };
  