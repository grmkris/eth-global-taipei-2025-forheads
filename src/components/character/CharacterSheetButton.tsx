"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CharacterSheet } from "./CharacterSheet";
import { useProgression } from "@/lib/chatHooks";
import { useAccount } from "wagmi";
import { UserIcon } from "lucide-react";
import { Level1SheetSchema, LevelSchema } from "@/server/db/chat/chat.db";

export function CharacterSheetButton() {
  const { address } = useAccount();
  const [error, setError] = React.useState<string | null>(null);
  
  // Only proceed with data fetching if we have an address
  if (!address) {
    return <Button variant="outline" size="sm" disabled>Connect wallet first</Button>;
  }
  
  // First try to get level progression
  const { 
    data: levelProgression, 
    isLoading: isLevelLoading, 
    error: levelError 
  } = useProgression({
    address: address,
    level: "level",
  });

  // Also get sheet progression as fallback
  const { 
    data: sheetProgression, 
    isLoading: isSheetLoading,
    error: sheetError
  } = useProgression({
    address: address,
    level: "sheet",
  });

  // Find the latest character sheet data
  const characterData = React.useMemo(() => {
    // First check if we have level progression data
    if (levelProgression && levelProgression.length > 0) {
      console.log("Level progression data:", levelProgression);
      try {
        // Find the most recent level entry with character data
        const latestWithSheet = levelProgression.find(p => {
          if (p.data && p.data.level === "level") {
            return (p.data as LevelSchema).characterSheet !== undefined;
          }
          return false;
        });
        
        if (latestWithSheet && latestWithSheet.data.level === "level") {
          console.log("Found character data in level progression", latestWithSheet);
          return (latestWithSheet.data as LevelSchema).characterSheet;
        }
      } catch (err) {
        console.error("Error parsing level progression data:", err);
      }
    } else {
      console.log("No level progression data available");
    }
    
    // Fallback to sheet progression if level progression didn't work
    if (sheetProgression && sheetProgression.length > 0) {
      console.log("Sheet progression data:", sheetProgression);
      try {
        const latestWithSheet = sheetProgression.find(p => {
          if (p.data && p.data.level === "sheet") {
            return (p.data as Level1SheetSchema).characterSheet !== undefined;
          }
          return false;
        });
        
        if (latestWithSheet && latestWithSheet.data.level === "sheet") {
          console.log("Found character data in sheet progression", latestWithSheet);
          return (latestWithSheet.data as Level1SheetSchema).characterSheet;
        }
      } catch (err) {
        console.error("Error parsing sheet progression data:", err);
      }
    } else {
      console.log("No sheet progression data available");
    }
    
    console.log("No character data found in any progression");
    return null;
  }, [levelProgression, sheetProgression]);

  // Handle errors
  React.useEffect(() => {
    if (levelError) {
      console.error("Level progression error:", levelError);
      setError("Failed to load level progression data");
    }
    if (sheetError) {
      console.error("Sheet progression error:", sheetError);
      setError("Failed to load character sheet data");
    }
  }, [levelError, sheetError]);

  if (isLevelLoading || isSheetLoading) {
    return <Button variant="outline" size="sm" disabled>Loading...</Button>;
  }

  if (error) {
    return <Button variant="outline" size="sm" disabled>Error loading data</Button>;
  }

  if (!characterData) {
    return null; // Don't show button if no character data exists
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <UserIcon className="h-4 w-4" />
          Character Sheet
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Character Sheet</DialogTitle>
        </DialogHeader>
        <CharacterSheet character={characterData} />
      </DialogContent>
    </Dialog>
  );
} 