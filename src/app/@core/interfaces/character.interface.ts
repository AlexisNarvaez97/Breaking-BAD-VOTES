export interface Character {
    id: string;
    name: string;
    actor?: string;
    description?: string;
    total_episodes?: number;
    photo?: string;
    url?: string;
    votes: number;
}