export interface QuestionDto {
  id: number;
  content: string;
  answers: Array<AnswerDto>;
}

export interface AnswerDto {
  id: number;
  content: string;
}
