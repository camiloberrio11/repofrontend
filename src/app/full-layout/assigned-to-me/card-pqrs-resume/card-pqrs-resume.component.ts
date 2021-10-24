import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { RequestPqrsPopulate } from "app/shared/models/RequestPqrs";

@Component({
  selector: "app-card-pqrs-resume",
  templateUrl: "./card-pqrs-resume.component.html",
  styleUrls: ["./card-pqrs-resume.component.scss"],
})
export class CardPqrsResumeComponent implements OnInit {
  @Input() pqr: RequestPqrsPopulate;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewDetail(): void {
    this.router.navigate(["/assigned-to-me/detail"], {
      state: {
        pqrInfo: this.pqr,
      },
    });
  }
}
