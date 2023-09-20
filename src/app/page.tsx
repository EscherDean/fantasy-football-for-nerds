import styles from "./page.module.css";
import { Team, League } from "./model/team";
import { Key } from "react";
import { calculateVd } from "./helpers/vdHelper";

export default function Home() {
    var teams = [
        new Team("Hogs", [127.4], [1, 1]),
        new Team("Bears", [107.4], [1, 1]),
        new Team("Lions", [82.4], [0, 1]),
        new Team("Cobras", [110.4], [0, 1]),
    ];

    var league = new League(teams);

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <ul>
                    {Object.values(league.teams).map((team) => (
                        <li key={team.name as Key}>
                            {team.name} are {team.officialRecord[0]} -{" "}
                            {team.officialRecord[1]}
                        </li>
                    ))}
                </ul>
                VD:
                <ul>
                    {calculateVd(league).map((vdResult) => (
                        <li key={vdResult.name as Key}>
                            {vdResult.name} twins: {vdResult.theoreticalWins}{" "}
                            vd: {vdResult.vd}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
