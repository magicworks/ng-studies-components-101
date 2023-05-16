import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAddTimerVisible: boolean = false;
  time!: number;

  logCountdownEnd () {
    console.log("The countdown has finished");
  }

  public showAddTimer () {
    this.isAddTimerVisible = true;
  }

  public hideAddTimer () {
    this.isAddTimerVisible = false;
  }
}
