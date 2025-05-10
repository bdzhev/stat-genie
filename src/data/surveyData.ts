export enum SurveySteps {
  ZERO,
  FIRST,
  SECOND,
  THIRD,
  FIFTH,
  SIXTH,
}

enum QuestionAnswers {
  TOTAL_FALSE,
  FALSEY,
  NEUTRAL,
  TRUEY,
  TOTAL_TRUE,
}

interface StepData {
  q1?: QuestionAnswers,
  q2?: QuestionAnswers,
  q3?: QuestionAnswers,
  q4?: QuestionAnswers,
  q5?: QuestionAnswers,
}

export interface GenieUserData {
  userId: number | null,
  curStep: SurveySteps,
}

export interface GenieSurveyStepData {
  stepData: [StepData, StepData, StepData, StepData, StepData, StepData];
}
