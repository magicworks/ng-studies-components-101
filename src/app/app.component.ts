import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public isAddTimerVisible: boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];
  @ViewChildren(SimpleAlertViewComponent) alerts!: QueryList<SimpleAlertViewComponent>;
  @ViewChild("timerInput") timerInput!: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {
    this.timers = [3, 20, 185];
  }

  ngAfterViewInit (): void {
    console.log(this.timerInput);
    this.timerInput.nativeElement.setAttribute("placeholder", "enter seconds");
    this.timerInput.nativeElement.classList.add("time-in");

    this.alerts.forEach(item => {
      if (!item.title) {
        item.title = 'Hi!';
        item.message = "Hello Worlds";
      }

      this.cdRef.detectChanges();
    });
  }

  logCountdownEnd () {
    console.log("The countdown has finished");
    this.showEndTimerAlert();
  }

  public showAddTimer () {
    this.isAddTimerVisible = true;
    setTimeout(() => {
      this.timerInput.nativeElement.focus();
    });
  }

  public hideAddTimer () {
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert () {
    this.alerts.first.show();
  }

  public hideEndTimerAlert () {

  }

  public submitAddTimer () {
    this.timers.push(this.time);
    this.hideAddTimer();
  }
}
