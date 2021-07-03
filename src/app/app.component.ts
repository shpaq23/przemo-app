import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Summary } from 'src/app/domain/Summary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  logged: boolean = false;

  summary: Summary;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  onLogin(): void {
    this.logged = true;
    this.changeDetectorRef.detectChanges();
  }

  onSubmit($event: Summary): void {
    this.summary = $event;
    this.changeDetectorRef.detectChanges();
  }

}
