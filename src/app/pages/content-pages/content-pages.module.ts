import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ErrorPageComponent } from "./error/error-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule ,
        ReactiveFormsModule,
        NgbModule,
        NgxSpinnerModule,
        SharedModule
    ],
    declarations: [
        ErrorPageComponent,
        LoginPageComponent,
        HomeComponent
    ]
})
export class ContentPagesModule { }
