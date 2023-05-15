import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;
  private countdownSubscription!: Subscription;
  private countdownEndSubscription!: Subscription;
  public countdown: number = 0;

  //getter
  get progress () {
    console.log('progress');
    return (this.init - this.countdown) / this.init * 100;
  }

  constructor(public timer: TimerService, private cdRef: ChangeDetectorRef) { }

  ngOnInit (): void {
    this.timer.restartCountdown(this.init);

    this.countdownEndSubscription = this.timer.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });

    this.countdownSubscription = this.timer.countdown$.subscribe((data) => {
      this.countdown = data;
      this.cdRef.markForCheck();
    });
  };

  ngOnDestroy (): void {
    this.timer.destroy();
    this.countdownSubscription.unsubscribe();
    this.countdownSubscription.unsubscribe();
  }
}