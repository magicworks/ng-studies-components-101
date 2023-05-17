import { AfterContentInit, Component, ContentChildren, QueryList, OnDestroy, OnInit } from '@angular/core';
import { TabComponent } from "../tab/tab.component";
import { Tab } from "../tab/tab.interface";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  // public tabs: Tab[] = [];
  private tabClickSubscriptions: any[] = [];

  constructor() { }

  ngOnInit () {
  }

  ngAfterContentInit () {
    console.log(this.tabs);
    this.tabs.forEach(tab => {
      let subscription = tab.onClick.subscribe(() => {
        console.log(`tab ${tab.title} content clicked`);
      });
      this.tabClickSubscriptions.push(subscription);
    });
    this.selectTab(this.tabs.first);
  }

  ngOnDestroy (): void {
    if (this.tabClickSubscriptions) {
      this.tabClickSubscriptions.forEach(
        item => item.unsubscribe()
      );
    }
  }

  selectTab (tab: Tab) {
    this.tabs.forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }
}