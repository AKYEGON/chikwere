
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CountdownContextType {
  isCountdownComplete: boolean;
  setCountdownComplete: (complete: boolean) => void;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const CountdownContext = createContext<CountdownContextType | undefined>(undefined);

export const useCountdown = () => {
  const context = useContext(CountdownContext);
  if (!context) {
    throw new Error('useCountdown must be used within CountdownProvider');
  }
  return context;
};

export const CountdownProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check localStorage for countdown completion
    const stored = localStorage.getItem('birthdayCountdownComplete');
    if (stored === 'true') {
      setIsCountdownComplete(true);
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const birthday = new Date();
      birthday.setDate(birthday.getDate() + 1);
      birthday.setHours(0, 0, 0, 0);
      
      const difference = birthday.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setCountdownComplete(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const setCountdownComplete = (complete: boolean) => {
    setIsCountdownComplete(complete);
    localStorage.setItem('birthdayCountdownComplete', complete.toString());
  };

  return (
    <CountdownContext.Provider value={{ isCountdownComplete, setCountdownComplete, timeLeft }}>
      {children}
    </CountdownContext.Provider>
  );
};
