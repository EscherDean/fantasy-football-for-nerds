export class League {
    teams: Record<string, Team>;

    constructor(teams: Team[]) {
        this.teams = {};
        teams.forEach((team) => {
            this.teams[team.name] = team;
        });
    }
}

export class Team {
    name: string;
    officialScores: number[];
    officialRecord: number[];

    constructor(
        name: string,
        officialScores: number[],
        officialRecord: number[]
    ) {
        this.name = name;
        this.officialScores = officialScores;
        this.officialRecord = officialRecord;
    }
}
