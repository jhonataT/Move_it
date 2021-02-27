import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export const ChallengeBox = () => {
    const { activeChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { !activeChallenge ? (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando <br/> os desafios.
                    </p>
                </div>
            ) : (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="challenge image" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
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