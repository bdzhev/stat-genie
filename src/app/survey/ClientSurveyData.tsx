"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SurveySteps } from "@/lib/data/surveyData";

export function ClientSurveyData() {
  const [stepData, setStepData] = useState<SurveySteps | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Access localStorage safely on client
    const storedData = localStorage.getItem("genieSurveyStepData");
    if (!storedData) {
      // No data found, redirect to start or default step
      router.replace("/survey/step/0"); // or whatever default step id
      return;
    }

    try {
      const parsedData = JSON.parse(storedData);
      const curStep: SurveySteps = parsedData.curStep;

      // Validate curStep against enum values
      if (!Object.values(SurveySteps).includes(curStep)) {
        // Invalid step, redirect to default
        router.replace("/survey/step/0");
        return;
      }

      setStepData(curStep);

      // Redirect to the current step page
      router.replace(`/survey/step/${curStep}`);
    } catch (error) {
      console.error("Failed to parse survey data:", error);
      // Redirect to default step on error
      router.replace("/survey/step/0");
    }
  }, [router]);

  // Optionally render loading state while redirecting
  return <p>Loading survey step...</p>;
}
