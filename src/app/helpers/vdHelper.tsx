import { League } from "../model/team";

export class VDResult {
    name: string;
    theoreticalWins: number;
    vd: number;

    constructor(name: string, theoreticalWins: number, vd: number) {
        this.name = name;
        this.theoreticalWins = theoreticalWins;
        this.vd = vd;
    }
}

export function calculateVd(league: League): VDResult[] {
    // TODO: This needs to account for byes - oof
    var vdResults: VDResult[] = [];
    const teams = Object.values(league.teams);
    const weeks = teams[0].officialRecord[1];

    Object.values(league.teams).forEach((team) => {
        // For each week, count the number of games each team would have won.
        var totalWins = 0;
        const totalGames = (teams.length - 1) * weeks;
        for (var week = 0; week < weeks; week++) {
            totalWins += teams.reduce(
                (total, team2) =>
                    total +
                    (team.name === team2.name ||
                    team.officialScores[week] < team2.officialScores[week]
                        ? 0
                        : 1),
                0
            );
        }

        const theoreticalWins = (totalWins / totalGames) * weeks;
        const vd = theoreticalWins - team.officialRecord[0];
        vdResults.push(new VDResult(team.name, theoreticalWins, vd));
    });
    return vdResults;
}
