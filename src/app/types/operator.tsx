interface Skill {
    skillId: string;
}
export interface Operator {
    name: string;
    skills: Skill[];
    rarity: string;
    profession: string;
}

export type OperatorData = Record<string, Operator>;