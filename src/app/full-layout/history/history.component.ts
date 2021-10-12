import { Component, OnInit, ViewChild } from '@angular/core';
import { usersListData } from './users-list.data';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  viewItem(): void {
    console.log('Viendo')
  }

}
