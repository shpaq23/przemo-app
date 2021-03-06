import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { QuizComponent } from 'src/app/ui/quiz/quiz.component';
import { LoginComponent } from './ui/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackgroundComponent } from './ui/background/background.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './ui/quiz/question/question.component';
import { SummaryComponent } from './ui/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LoginComponent,
    BackgroundComponent,
    QuestionComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
