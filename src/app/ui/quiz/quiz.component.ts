import { Component, OnInit } from '@angular/core';
import { QuizHttpResource } from 'src/app/infrastructure/quiz/quiz.http.resource';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private readonly quizHttpResource: QuizHttpResource) { }

  ngOnInit(): void {

  }

}
