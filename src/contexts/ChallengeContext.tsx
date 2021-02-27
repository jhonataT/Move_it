import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export const ChallengesProvider = ({ children }) => {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const levelUp = () => {
      setLevel(level + 1);
    }

    const startNewChallenge = () => {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];

      setActiveChallenge(challenge);
    }

    return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
    )
}