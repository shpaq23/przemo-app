import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  logged: boolean = false;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  onLogin(): void {
    this.logged = true;
    this.changeDetectorRef.detectChanges();
  }

}
