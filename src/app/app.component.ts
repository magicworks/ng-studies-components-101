import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counterProgress: number = 0;

  countdownForm = new FormGroup({
    totalCountdown: new FormControl(15)
  });

  updateProgress ($event: number) {
    const totalCountdown = this.countdownForm.get('totalCountdown')?.value;
    if (totalCountdown)
      this.counterProgress = (totalCountdown - $event) / totalCountdown * 100;
  }

  countdownFinished () {
    console.log('countdown has finished');
  }
}
