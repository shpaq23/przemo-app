import { AnswerDto, QuestionDto } from 'src/app/infrastructure/quiz/question.dto';
import { Answer } from 'src/app/domain/Answer';

export class Question {

  constructor(private readonly id: number,
              private readonly content: string,
              private readonly answers: Array<Answer>) {
  }


  public static fromDTO(dto: QuestionDto): Question {
    const answers: Array<Answer> = dto.answers.map(dto => Answer.fromDTO(dto));
    return new Question(dto.id, dto.content, answers);
  }

  getId(): number {
    return this.id;
  }

  getContent(): string {
    return this.content;
  }

  getAnswers(): Array<Answer> {
    return this.answers;
  }

}
