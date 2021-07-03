import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/domain/Question';
import { Answer } from 'src/app/domain/Answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Input()
  questionIndex: number;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  answerQuestion(answer: Answer): void {
    this.question.setSelectedAnswer(answer);
    this.changeDetectorRef.detectChanges();
  }

}
