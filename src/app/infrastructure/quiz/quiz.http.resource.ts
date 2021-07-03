import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/domain/Question';
import { Observable } from 'rxjs';
import { QuestionDto } from 'src/app/infrastructure/quiz/question.dto';
import { map } from 'rxjs/operators';
import { AnswerRequest } from 'src/app/infrastructure/quiz/answer.request';
import { Summary } from 'src/app/domain/Summary';
import { SummaryDto } from 'src/app/infrastructure/quiz/summary.dto';

@Injectable(
  { providedIn: 'root' }
)
export class QuizHttpResource {

  private readonly url: string = 'http://localhost:8080/question/';

  constructor(private readonly httpClient: HttpClient) {
  }

  getQuestions(): Observable<Array<Question>> {
    return this.httpClient.get<Array<QuestionDto>>(this.url)
               .pipe(
                 map(dtos => dtos.map(dto => Question.fromDTO(dto)))
               );
  }

  getSummary(answers: AnswerRequest): Observable<Summary> {
    return this.httpClient.post<SummaryDto>(this.url + 'answer', answers).pipe(
      map((dto) => Summary.fromDTO(dto))
    );
  }


}

const mockDto: Array<QuestionDto> = [{"id":1,"content":"1.\tLek ten powoduje obniżenie stężenia jonów K, Na i podwyższenie Ca w osoczu – odnosi się to do:","answers":[{"id":1,"content":"a.\tFurosemidu"},{"id":2,"content":"b.\tSpironolaktonu"},{"id":3,"content":"c.\thydrochlorotiazydu"},{"id":4,"content":"d.\tmannitolu"}]},{"id":2,"content":"2.\tFarmakoterapia częstoskurczu nadkomorowego polega m.in. na podawaniu amiodaronu. Lek ten powoduje blokadę kanału:","answers":[{"id":5,"content":"a.\tsodowego"},{"id":6,"content":"b.\tpotasowego"},{"id":7,"content":"c.\twapniowego"},{"id":8,"content":"d.\tchlorkowego"}]},{"id":3,"content":"3.\tWskaż fałszywe połączenie lek-schorzenie:","answers":[{"id":9,"content":"a.\tdiazotan izosorbidu – przewlekła niewydolność krążenia"},{"id":10,"content":"b.\tenalapril – przewlekła niewydolność żylna"},{"id":11,"content":"c.\tnimodypina – zaburzenia ukrwienia mózgu"},{"id":12,"content":"d.\tklonidyna – jaskra"}]},{"id":4,"content":"4.\tWskaż prawidłową informację:","answers":[{"id":13,"content":"a.\tfibraty są stosowane u chorych ze znacznie podwyższonym stężeniem cholesterolu całkowitego i stężeniem fibrynogenu w normie"},{"id":14,"content":"b.\tinhibitory HMG-CoA stosowane są u chorych ze znacznie podwyższonym cholesterolem całkowitym i stężeniem trójglicerydów w normie"},{"id":15,"content":"c.\tpołączenie pochodnych kwasu fibrynowego i statyn zmniejsza ryzyko wystąpienia rabdomiolizy"},{"id":16,"content":"d.\tKolestyramina zwiększa wchłanianie podawanych jednocześnie z nią leków"}]}]

