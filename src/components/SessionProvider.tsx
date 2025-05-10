'use client';

import { SurveySteps } from '@/data/surveyData';
import React, { createContext, useContext, useState, useEffect } from 'react';

type UserContextType = [userId: number | null, curStep: SurveySteps, isLoading: boolean];
const SessionContext = createContext<UserContextType>([null, 0, true]);

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

async function initSession(): Promise<{ userId: number; curStep: SurveySteps }> {
  const session = localStorage.getItem(STORAGE_KEY);
  const parsed = session ? JSON.parse(session) : null;
  const existingId = parsed?.userId;

  if (existingId) {
    const fetchedStep = await fetchCurStep(existingId);
    if (fetchedStep !== undefined && fetchedStep !== null) {
      return { userId: existingId, curStep: fetchedStep };
    }
  }
  const newId = await createNewUser();
  return { userId: newId, curStep: 0 };
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<number | null>(null);
  const [curStep, setCurStep] = useState<SurveySteps>(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { userId, curStep } = await initSession();
        setUserId(userId);
        setCurStep(curStep);
      } catch (err) {
        console.error('Error initializing session', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <SessionContext.Provider value={[userId, curStep, isLoading]}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSessionData = () => useContext(SessionContext);
