import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import { usersListData } from './users-list.data';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // row data
  public rows = usersListData;
  public ColumnMode = ColumnMode;
  public limitRef = 10;

  // column header
  public columns = [
    { name: "ID", prop: "ID" },
    { name: "Username", prop: "Username" },
    { name: "Name", prop: "Name" },
    { name: "Last Activity", prop: "Last Activity" },
    { name: "Verified", prop: "Verified" },
    { name: "Role", prop: "Role" },
    { name: "Status", prop: "Status" },
    { name: "Actions", prop: "Actions" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
