import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InstanceOfPipe} from '../pipes/instance-of.pipe';
import {KeysPipe} from '../pipes/keys.pipe';
import {CellComponent} from './cell/cell.component';
import {RowComponent} from './row/row.component';
import {TableComponent} from './table/table.component';

const components = [
  TableComponent, RowComponent, CellComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [...components, InstanceOfPipe, KeysPipe],
  exports: [...components]
})
export class TableFormsModule {
}
