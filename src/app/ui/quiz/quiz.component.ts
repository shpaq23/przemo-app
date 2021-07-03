import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { QuizHttpResource } from 'src/app/infrastructure/quiz/quiz.http.resource';
import { Question } from 'src/app/domain/Question';
import { UserStorage } from 'src/app/api/user.storage';
import { User } from 'src/app/domain/User';
import { UserAnswer } from 'src/app/infrastructure/quiz/answer.request';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizComponent implements OnInit {

  questions: Array<Question> = [];

  actualQuestionIndex: number;

  user: User;

  isNextQuestionAvailable: boolean = true;
  isPreviousQuestionAvailable: boolean = false;

  constructor(private readonly quizHttpResource: QuizHttpResource,
              private readonly userStorage: UserStorage,
              private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.selectUser();
    this.fetchQuests();
  }

  nextQuestion(): void {
    if (this.actualQuestionIndex + 1 <= this.questions.length - 1) {
      this.actualQuestionIndex++;
    }
    this.setIsPreviousQuestionAvailable();
    this.setIsNextQuestionAvailable()
    this.changeDetectorRef.detectChanges();
  }

  previousQuestion(): void {
    if (this.actualQuestionIndex - 1 >= 0) {
      this.actualQuestionIndex--;
    }
    this.setIsPreviousQuestionAvailable();
    this.setIsNextQuestionAvailable();
    this.changeDetectorRef.detectChanges();
  }

  submit(): void {
    const userId = this.user.getId();

    const userAnswers: Array<UserAnswer> = this.questions.map(question => ({
      questionId: question.getId(),
      answerId: question.getSelectedAnswer().getId()
    }));
    this.quizHttpResource.setAnswers({ userId, userAnswers }).subscribe();
  }

  private setIsPreviousQuestionAvailable(): void {
    this.isPreviousQuestionAvailable = this.actualQuestionIndex !== 0;
  }

  private setIsNextQuestionAvailable(): void {
    this.isNextQuestionAvailable = this.actualQuestionIndex !== this.questions.length - 1;
  }

  private selectUser(): void {
    this.userStorage.selectUser()
        .subscribe(user => {
          this.user = user;
          this.changeDetectorRef.detectChanges();
        });
  }

  private fetchQuests(): void {
    this.quizHttpResource.getQuestions()
        .subscribe(questions => {
          this.questions = questions;
          this.actualQuestionIndex = 0;
          this.setIsPreviousQuestionAvailable();
          this.setIsNextQuestionAvailable()
          this.changeDetectorRef.detectChanges();
        });
  }

}
