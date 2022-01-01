import { Component, OnInit } from '@angular/core';
import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService, View, Timezone
} from '@syncfusion/ej2-angular-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class CalendarComponent implements OnInit {
   private dataManager: DataManager = new DataManager({
    url: 'http://localhost:8081/get_event',
    crudUrl: 'http://localhost:8081/add_event',
    adaptor: new UrlAdaptor(),
    crossDomain: true,
  });
  public currentView: View = 'Week';
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
  public selectedDate!: Date;
  public timezone: Timezone = new Timezone();
  ngOnInit(): void {
    this.selectedDate = new Date();
  }
}
