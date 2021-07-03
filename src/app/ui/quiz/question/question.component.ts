import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/domain/Question';

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
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
