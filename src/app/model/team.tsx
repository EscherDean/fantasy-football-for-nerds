export class League {
    
}

export class Team {
    name: String;
    scores: number[] = [];

    constructor(name: string) {
        this.name = name;
    }
}