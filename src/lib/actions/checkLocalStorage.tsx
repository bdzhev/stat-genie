import { GenieSurveyStepData } from "../data/surveyData";

export const defaultData: GenieSurveyStepData = {
  curStep: 0,
  stepData: [{}, {}, {}, {}, {}, {}],
};

export const checkLocalStorage = (): GenieSurveyStepData | null | undefined => {
  const item = localStorage.getItem('GenieSurveyStepData');
  if (!item) {
    localStorage.setItem('GenieSurveyStepData', JSON.stringify(defaultData));
    return null;
  }
  try {
    const data: GenieSurveyStepData = JSON.parse(item);
    return data;
  } catch (error) {
    console.error('Error parsing genieSurveyStepData from localStorage', error);
    return null;
  }
};
