import styles from '../styles/components/Profile.module.css';

export const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jhonataT.png" alt="Profile image" />
            <div>
                <strong>Jhonata Tenorio</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    );
};