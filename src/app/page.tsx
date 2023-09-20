import styles from './page.module.css'
import { Team } from './model/team'
import { Key } from 'react';

export default function Home() {
  var teams = [new Team('Hogs')];
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          {teams.map(team =>
              <li key={team.name as Key}>{team.name}</li>
            )}
        </ul>
      </div>
    </main>
  )
}
