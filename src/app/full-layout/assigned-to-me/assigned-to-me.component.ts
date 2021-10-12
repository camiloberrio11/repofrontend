import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RequestPqrsPopulate } from "app/shared/models/RequestPqrs";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-assigned-to-me",
  templateUrl: "./assigned-to-me.component.html",
  styleUrls: ["./assigned-to-me.component.scss"],
})
export class AssignedToMeComponent implements OnInit {
  listPqrs: RequestPqrsPopulate[] = [];
  page = 1;
  isShowCategory = false;
  kbCategories: any[] = [
    {
      kbCategoryId: "1",
      name: "Free Philippine Real Estate Ads Forums",
      content:
        "Using Laravel, no worries we have that convered as well. We bundled Laravel Starter Kit with this template.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-1.png",
          name: "Alberto Glotzbach",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-2.png",
          name: "Lilian Nenez",
        },
      ],
      text: "+40 more",
    },
    {
      kbCategoryId: "2",
      name: "Advertising on Budget Real Estate Ads Forums",
      content:
        "Ready to use athentications with Firebase, social media lightning fast search and discovery experiences.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-3.png",
          name: "Benjamin Swanson",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-4.png",
          name: "Cordelia McCoy",
        },
      ],
      text: "+70 more",
    },
    {
      kbCategoryId: "3",
      name: "Adword Keywords Real Estate Ads Forums",
      content:
        "Carefully crafted, clean, smart & easy theme navigation with collapsible option. lightning and discovery experiences.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-5.png",
          name: "William Woods",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-6.png",
          name: "Amanda Swanson",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-7.png",
          name: "Dylan McCoy",
        },
      ],
      text: "+10 more",
    },
    {
      kbCategoryId: "4",
      name: "Internet Banner Most Reliable Forms",
      content:
        "Easy & smart fuzzy search functionality which enables users to search quickly.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-8.png",
          name: "Trina Lynes",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-9.png",
          name: "Shawn Harrington",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-10.png",
          name: "Rosalie Perkins",
        },
      ],
      text: "+9 more",
    },
    {
      kbCategoryId: "5",
      name: "How To Write Better Copy With White Ron",
      content:
        "Bookmark allows users to select their favourite pages/apps and navigate quickly.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-11.png",
          name: "Max Jones",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-12.png",
          name: "Minnie Allison",
        },
      ],
      text: "+20 more",
    },
    {
      kbCategoryId: "6",
      name: "Research Philippine Real Estate Ads Forums",
      content:
        "Frest comes with built-in light and dark layouts, select as per your preference.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-13.png",
          name: "Russell Jenkins",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-14.png",
          name: "Lina McGuire",
        },
      ],
      text: "+12 more",
    },
    {
      kbCategoryId: "7",
      name: "Listing Philippine Real Estate Ads Forums",
      content:
        "Unlimited color options allows you to set your application color as per your branding.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-15.png",
          name: "Jeremiah Floyd",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-16.png",
          name: "Cynthia McKenzie",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-17.png",
          name: "Marvin Kelly",
        },
      ],
      text: "+10 more",
    },
    {
      kbCategoryId: "8",
      name: "Media Mix Estate Ads Forums Ready To Go",
      content:
        "Lifetime updates with new demos and features is fast search and discovery experiences.",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-18.png",
          name: "Lettie Moss",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-19.png",
          name: "Earl Glover",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-20.png",
          name: "Noah Singleton",
        },
      ],
      text: "+40 more",
    },
    {
      kbCategoryId: "9",
      name: "Finally A top Secret Estate Ads Forums",
      content:
        "Get access to premium customer support from the actual people who have created.!",
      tooltips: [
        {
          avatar: "assets/img/portrait/small/avatar-s-21.png",
          name: "Adrian Marsh",
        },
        {
          avatar: "assets/img/portrait/small/avatar-s-22.png",
          name: "Maria Stevenson",
        },
      ],
      text: "+40 more",
    },
  ];

  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPqrsPending();
  }

  private getPqrsPending(): void {
    this.spinner.show();
    this.pqrApi
      .getRequestByStatus({ limit: 10, page: 1, closed: false })
      .subscribe(
        (req) => {
          this.listPqrs = req?.data;
          this.spinner.hide();
        },
        (err) => {
          this.toastr.error('Ha ocurrido un error obteniendo las asignaciones pendientes');
          this.spinner.hide();
        }
      );
  }
}
