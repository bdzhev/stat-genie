'use client';

import { SurveySteps } from '@/data/surveyData';
import { createContext, useContext, useState, useEffect } from 'react';

type UserContext = number | null;
const SessionContext = createContext([null, 0]);

const STORAGE_KEY = 'statGenieSessionData';

async function createNewUser(): Promise<number> {
  const res = await fetch('/api/create-id', { method: 'POST' });
  const { id } = await res.json();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ userId: id }));

  return id;
}

async function fetchCurStep(userId: number): Promise<SurveySteps> {
  const res = await fetch(`/api/get-step?id=${userId}`);
  const { curStep } = await res.json();

  return curStep;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<UserContext>(null);
  const [curStep, setCurStep] = useState<SurveySteps>(0);

  useEffect(() => {
    const initSession = async () => {
      try {
        const session = localStorage.getItem(STORAGE_KEY);
        const parsed = session ? JSON.parse(session) : null;
        const existingId = parsed?.userId;

        if (existingId) {
          const fetchedStep = await fetchCurStep(existingId);
          setUserId(existingId);
          setCurStep(fetchedStep);
        } else {
          const newId = await createNewUser();
          setUserId(newId);
        }
      } catch (err) {
        console.error('Error initializing session', err);
      }
    };

    initSession();
  }, []);

  return <SessionContext.Provider value={[userId, curStep]}>{children}</SessionContext.Provider>;
}

export const useSessionData = () => useContext(SessionContext);
