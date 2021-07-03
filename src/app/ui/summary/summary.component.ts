import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Summary } from 'src/app/domain/Summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {

  @Input()
  summary: Summary


  constructor() { }

  ngOnInit(): void {
  }

}
