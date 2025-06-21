import { machinesDB } from "./machines";

// 1. Mapeia os termos individuais por máquina
export const machineTerms: Record<string, string[]> = Object.fromEntries(
  machinesDB.map(machine => {
    const terms = [
      ...machine.skills,
      machine.os.toString(),
      machine.difficulty.toString(),
      machine.status.toString()
    ]
      .concat(" ", "")
      .join(" ")
      .toLowerCase()
      .split(" ")      
    return [machine.name, terms];
  })
);

// 2. Cria a base única e ordenada de termos de todas as máquinas
const allTerms: string[] = Object.values(machineTerms).flat();
const tecnologias: string[] = [...new Set(allTerms)].sort();

export const fullFilterDatabase = tecnologias;
