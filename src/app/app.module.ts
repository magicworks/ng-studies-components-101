import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { DisplayComponent } from "./display/display.component";
import { TimerComponent } from './timer/timer.component';
import { AlertViewComponent } from './alert-view/alert-view.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    DisplayComponent,
    TimerComponent,
    AlertViewComponent,
    TabsComponent,
    TabComponent,
    SimpleAlertViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
