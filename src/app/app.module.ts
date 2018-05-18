import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { TableFormsModule } from './table-forms/table-forms.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoTablesComponent } from './scenarios/two-tables/two-tables.component';
import { TableExampleComponent } from './scenarios/components/table-example/table-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoTablesComponent,
    TableExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'two', component: TwoTablesComponent },
      { path: '', component: TableExampleComponent },
    ]),
    FormsModule,
    TableFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
