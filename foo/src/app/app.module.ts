import { TableFormsModule } from './table-forms/table-forms.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
