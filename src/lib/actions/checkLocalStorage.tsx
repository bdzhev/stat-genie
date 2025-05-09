import { GenieSurveyStepData, SurveySteps } from "../data/surveyData";

export const defaultData: GenieSurveyStepData = {
  curStep: 0,
  stepData: [{}, {}, {}, {}, {}, {}],
};

function isGenieSurveyStepData (obj: any): obj is GenieSurveyStepData {
  return (
    obj !== null &&
    typeof obj === "object" &&
    Object.keys(SurveySteps).includes(obj.curStep)    
  );
}

export const getCurStepDataInLocalStorage = (): SurveySteps => {
  const item = localStorage.getItem('GenieSurveyStepData');
  if (!item) {
    localStorage.setItem('GenieSurveyStepData', JSON.stringify(defaultData));
    return defaultData.curStep;
  }
  try {
    const data: GenieSurveyStepData = JSON.parse(item);
    return isGenieSurveyStepData(data) ? data.curStep : defaultData.curStep;
  } catch (error) {
    console.error('Error parsing genieSurveyStepData from localStorage', error);
    return defaultData.curStep;
  }
};

export const getStepAnswersInLocalStorage = (stepId: SurveySteps) => {
  console.log(stepId);
  return false;
};
