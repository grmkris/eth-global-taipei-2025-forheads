// Dice rolling utilities for the DM

export function rollDice(notation: string): {
  total: number;
  rolls: number[];
  formula: string;
} {
  // Parse dice notation (e.g., "2d6+3")
  const diceRegex = /(\d+)d(\d+)([+-]\d+)?/i;
  const match = notation.match(diceRegex);
  
  if (!match) {
    throw new Error(`Invalid dice notation: ${notation}`);
  }
  
  const numDice = parseInt(match[1], 10);
  const diceSides = parseInt(match[2], 10);
  const modifier = match[3] ? parseInt(match[3], 10) : 0;
  
  if (numDice <= 0 || diceSides <= 0) {
    throw new Error(`Invalid dice parameters: ${notation}`);
  }
  
  // Roll the dice
  const rolls: number[] = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(Math.floor(Math.random() * diceSides) + 1);
  }
  
  // Calculate total
  const rollTotal = rolls.reduce((sum, roll) => sum + roll, 0);
  const total = rollTotal + modifier;
  
  // Formula representation for display
  const formula = `${rolls.join(' + ')}${modifier !== 0 ? (modifier > 0 ? ' + ' + modifier : ' - ' + Math.abs(modifier)) : ''}`;
  
  return { total, rolls, formula };
}

export function rollCheck(
  abilityModifier: number, 
  proficiencyBonus: number = 0, 
  hasAdvantage: boolean = false,
  hasDisadvantage: boolean = false
): {
  success: boolean;
  roll: number;
  total: number;
  dc?: number;
  details: string;
} {
  // Determine if we roll with advantage, disadvantage, or normally
  let roll1 = Math.floor(Math.random() * 20) + 1;
  let roll2 = Math.floor(Math.random() * 20) + 1;
  let effectiveRoll: number;
  
  if (hasAdvantage && !hasDisadvantage) {
    // Advantage: take higher roll
    effectiveRoll = Math.max(roll1, roll2);
  } else if (!hasAdvantage && hasDisadvantage) {
    // Disadvantage: take lower roll
    effectiveRoll = Math.min(roll1, roll2);
  } else {
    // Normal roll or advantage/disadvantage cancel out
    effectiveRoll = roll1;
  }
  
  const total = effectiveRoll + abilityModifier + proficiencyBonus;
  
  // Since we don't know the DC yet, just return the result
  // The DM will determine success based on DC
  return {
    success: false, // Will be determined by DM based on DC
    roll: effectiveRoll,
    total,
    details: `Rolled ${effectiveRoll}${hasAdvantage && !hasDisadvantage ? ' (with advantage)' : ''}${!hasAdvantage && hasDisadvantage ? ' (with disadvantage)' : ''} + ${abilityModifier} (ability) + ${proficiencyBonus} (proficiency) = ${total}`
  };
}

export function checkAgainstDC(checkResult: ReturnType<typeof rollCheck>, dc: number): ReturnType<typeof rollCheck> {
  return {
    ...checkResult,
    success: checkResult.total >= dc,
    dc
  };
} 