import { AnswerDto } from 'src/app/infrastructure/quiz/question.dto';

export class Answer {

  constructor(private readonly id: number,
              private readonly content: string) {
  }

  public static fromDTO(dto: AnswerDto): Answer {
    return new Answer(dto.id, dto.content);
  }

  getId(): number {
    return this.id;
  }

  getContent(): string {
    return this.content;
  }

}
