export interface AnswerRequest {
  userId: number;
  userAnswers: Array<UserAnswer>;
}

export interface UserAnswer {
  questionId: number;
  answerId?: number;
}
