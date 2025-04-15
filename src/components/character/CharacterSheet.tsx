"use client";

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { CharacterSchema } from "@/server/db/chat/chat.db";

// Helper functions
const getModifier = (score: number = 10) => Math.floor((score - 10) / 2);
const formatModifier = (mod: number) => mod >= 0 ? `+${mod}` : `${mod}`;

// Default character data for fallback
const DEFAULT_CHARACTER = {
  character: {
    name: "Unknown",
    race: "Unknown",
    class: "Unknown",
    level: 1,
    background: "",
    alignment: "Neutral",
    experience: 0,
    inspiration: false,
    proficiencyBonus: 2,
    speed: 30,
    size: "Medium",
  },
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  status: {
    max_hp: 10,
    current_hp: 10,
    temp_hp: 0,
    armor_class: 10,
    initiative: 0,
    speed: 30,
    passive_perception: 10,
  },
  proficiencies: {
    saving_throws: [],
    skills: [],
    languages: [],
    weapons: [],
    armor: [],
    tools: [],
  },
  inventory: {
    equipment: [],
    consumables: [],
    valuables: [],
    other_items: [],
    carry_capacity: {
      current_weight: 0,
      maximum_weight: 0,
    },
  },
  spellcasting: null,
};

interface CharacterSheetProps {
  character: typeof CharacterSchema._type;
  onUpdate?: (updatedCharacter: typeof CharacterSchema._type) => void;
}

export function CharacterSheet({ character, onUpdate }: CharacterSheetProps) {
  // Apply default values for missing data
  const char = React.useMemo(() => {
    if (!character) return DEFAULT_CHARACTER;
    
    return {
      character: {
        ...DEFAULT_CHARACTER.character,
        ...character.character,
      },
      attributes: {
        ...DEFAULT_CHARACTER.attributes,
        ...character.attributes,
      },
      status: {
        ...DEFAULT_CHARACTER.status,
        ...character.status,
      },
      proficiencies: {
        ...DEFAULT_CHARACTER.proficiencies,
        ...character.proficiencies,
      },
      inventory: character.inventory || DEFAULT_CHARACTER.inventory,
      spellcasting: character.spellcasting,
    };
  }, [character]);
  
  // Format ability scores and modifiers
  const abilityScores = [
    { name: "STR", score: char.attributes.strength, 
      mod: getModifier(char.attributes.strength) },
    { name: "DEX", score: char.attributes.dexterity, 
      mod: getModifier(char.attributes.dexterity) },
    { name: "CON", score: char.attributes.constitution, 
      mod: getModifier(char.attributes.constitution) },
    { name: "INT", score: char.attributes.intelligence, 
      mod: getModifier(char.attributes.intelligence) },
    { name: "WIS", score: char.attributes.wisdom, 
      mod: getModifier(char.attributes.wisdom) },
    { name: "CHA", score: char.attributes.charisma, 
      mod: getModifier(char.attributes.charisma) },
  ];

  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm w-full">
      {/* Character Header */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{char.character.name}</h2>
            <div className="text-sm text-muted-foreground">
              {char.character.race} {char.character.class} {char.character.level}
            </div>
          </div>
          <div className="flex gap-2">
            <Badge>Level {char.character.level}</Badge>
            <Badge variant="outline">{char.character.alignment}</Badge>
          </div>
        </div>
      </div>

      {/* Main Sheet Content */}
      <Tabs defaultValue="stats" className="p-4">
        <TabsList className="mb-4">
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="combat">Combat</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="spells">Spells</TabsTrigger>
        </TabsList>

        {/* STATS TAB */}
        <TabsContent value="stats">
          {/* Ability Scores */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
            {abilityScores.map(ability => (
              <Card key={ability.name} className="text-center">
                <CardHeader className="pb-2 pt-3">
                  <CardTitle className="text-sm">{ability.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-3 pt-0">
                  <div className="text-2xl font-bold">{ability.score}</div>
                  <div className="text-sm">{formatModifier(ability.mod)}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {char.proficiencies.skills?.length > 0 ? (
                  char.proficiencies.skills.map(skill => (
                    <div key={skill} className="flex items-center">
                      <Badge className="mr-2 w-6 h-6 rounded-full p-0 flex items-center justify-center">
                        P
                      </Badge>
                      <span>{skill}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-muted-foreground">No skill proficiencies</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Languages and Proficiencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {char.proficiencies.languages?.length > 0 ? (
                    char.proficiencies.languages.map(lang => (
                      <Badge key={lang} variant="outline">{lang}</Badge>
                    ))
                  ) : (
                    <div className="text-muted-foreground">No languages</div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Proficiencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {[...(char.proficiencies.armor || []), 
                     ...(char.proficiencies.weapons || []), 
                     ...(char.proficiencies.tools || [])].length > 0 ? (
                    [...(char.proficiencies.armor || []), 
                     ...(char.proficiencies.weapons || []), 
                     ...(char.proficiencies.tools || [])].map(prof => (
                      <Badge key={prof} variant="outline">{prof}</Badge>
                    ))
                  ) : (
                    <div className="text-muted-foreground">No proficiencies</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* COMBAT TAB */}
        <TabsContent value="combat">
          {/* Hit Points */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle>Hit Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-2xl font-bold">
                  {char.status.current_hp || 0}/{char.status.max_hp || 0}
                </div>
                {(char.status.temp_hp || 0) > 0 && (
                  <Badge variant="outline">+{char.status.temp_hp} Temp</Badge>
                )}
              </div>
              <Progress 
                value={char.status.max_hp 
                  ? ((char.status.current_hp || 0) / char.status.max_hp) * 100 
                  : 0} 
                className="h-3"
              />
            </CardContent>
          </Card>

          {/* Combat Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <Card className="text-center">
              <CardHeader className="pb-1 pt-3">
                <CardTitle className="text-xs">Armor Class</CardTitle>
              </CardHeader>
              <CardContent className="pt-1">
                <div className="text-2xl font-bold">{char.status.armor_class || 10}</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-1 pt-3">
                <CardTitle className="text-xs">Initiative</CardTitle>
              </CardHeader>
              <CardContent className="pt-1">
                <div className="text-2xl font-bold">
                  {formatModifier(char.status.initiative || getModifier(char.attributes.dexterity))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-1 pt-3">
                <CardTitle className="text-xs">Speed</CardTitle>
              </CardHeader>
              <CardContent className="pt-1">
                <div className="text-2xl font-bold">{char.character.speed || 30}ft</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-1 pt-3">
                <CardTitle className="text-xs">Proficiency</CardTitle>
              </CardHeader>
              <CardContent className="pt-1">
                <div className="text-2xl font-bold">+{char.character.proficiencyBonus || 2}</div>
              </CardContent>
            </Card>
          </div>

          {/* Weapons */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Weapons</CardTitle>
            </CardHeader>
            <CardContent>
              {char.inventory?.equipment && char.inventory.equipment.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Attack</TableHead>
                      <TableHead>Damage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {char.inventory.equipment
                      .filter(item => 
                        char.proficiencies.weapons.some(w => 
                          item.name.toLowerCase().includes(w.toLowerCase())
                        )
                      )
                      .map(weapon => (
                        <TableRow key={weapon.name}>
                          <TableCell>{weapon.name}</TableCell>
                          <TableCell>+{char.character.proficiencyBonus || 2}</TableCell>
                          <TableCell>1d8</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-4 text-muted-foreground">No weapons found</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* EQUIPMENT TAB */}
        <TabsContent value="equipment">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              {char.inventory?.equipment && char.inventory.equipment.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Equipped</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {char.inventory.equipment.map(item => (
                      <TableRow key={item.name}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-sm">{item.description}</TableCell>
                        <TableCell>{item.equipped ? "Yes" : "No"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-4 text-muted-foreground">No equipment found</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* SPELLS TAB */}
        <TabsContent value="spells">
          {char.spellcasting ? (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Spells</CardTitle>
              </CardHeader>
              <CardContent>
                {char.spellcasting.spells && char.spellcasting.spells.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Prepared</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {char.spellcasting.spells.map((spell: { name: string; level: number; prepared: boolean }) => (
                        <TableRow key={spell.name}>
                          <TableCell>{spell.name}</TableCell>
                          <TableCell>{spell.level}</TableCell>
                          <TableCell>{spell.prepared ? "Yes" : "No"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">No spells known</div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              This character doesn't have spellcasting abilities.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 