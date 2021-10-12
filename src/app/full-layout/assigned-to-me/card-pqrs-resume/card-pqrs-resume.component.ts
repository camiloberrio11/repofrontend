import { Component, OnInit, Input } from '@angular/core';
import { RequestPqrsPopulate } from 'app/shared/models/RequestPqrs';

@Component({
  selector: 'app-card-pqrs-resume',
  templateUrl: './card-pqrs-resume.component.html',
  styleUrls: ['./card-pqrs-resume.component.scss']
})
export class CardPqrsResumeComponent implements OnInit {
  @Input() pqr: RequestPqrsPopulate;
  constructor() { }

  ngOnInit(): void {
    console.log(this.pqr);
  }


  viewDetail(): void{

  }
}
