import styles from '../styles/components/ChallengeBox.module.css';

export const ChallengeBox = () => {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { !hasActiveChallenge ? (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando <br/> os desafios.
                    </p>
                </div>
            ) : (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="challenge image" />
                        <strong>Novo desafio</strong>
                        <p>Levante e beba água</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailButton}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededButton}>Completei</button>
                    </footer>
                </div>
            )}
        </div>
    )
}