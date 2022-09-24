import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppServiceService} from "./app/app-service.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPrintModule} from "ngx-print";
import { UplaodComponent } from './uplaod/uplaod.component';
import {UplaodService} from "./uplaod/uplaod.service";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import {GridModule, PDFModule} from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {PDFExportModule} from "@progress/kendo-angular-pdf-export";







@NgModule({
  declarations: [
    AppComponent,
    UplaodComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPrintModule,
    FormsModule,
    ButtonsModule,
    DateInputsModule,
    GridModule,
    DropDownsModule,
    PDFModule,
    PDFExportModule,


  ],
  providers: [AppServiceService,UplaodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
