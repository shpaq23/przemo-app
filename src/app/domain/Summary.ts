import { SummaryDto } from 'src/app/infrastructure/quiz/summary.dto';

export class Summary {
  constructor(private readonly email: string,
              private readonly maxScore: number,
              private readonly percentageResult: number,
              private readonly score: number) {
  }

  public static fromDTO(dto: SummaryDto): Summary {
    return new Summary(dto.email, dto.maxScore, dto.percentageResult, dto.score);
  }

  getEmail(): string {
    return this.email;
  }

  getMaxScore(): number {
    return this.maxScore;
  }

  getPercentageResult(): number {
    return this.percentageResult;
  }

  getScore(): number {
    return this.score;
  }
}
