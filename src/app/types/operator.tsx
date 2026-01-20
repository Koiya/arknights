
interface SkillRanks {
    grades: string[];
    level: string;
}

export interface Skill {
    skillId: string;
    skillRanks: SkillRanks[];
}

export interface Operator {
    name: string;
    skills: Skill[];
    rarity: string;
    profession: string;
    summary: string;
}

interface includes extends Operator{
    includes(text: string): boolean;
}

export type OperatorData = Record<string, Operator>;