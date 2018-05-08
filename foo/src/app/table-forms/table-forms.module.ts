import { KeysPipe } from './../pipes/keys.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InstanceOfPipe } from '../pipes/instance-of.pipe';

const components = [
  TableComponent, RowComponent, CellComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...components, InstanceOfPipe, KeysPipe],
  exports: [...components]
})
export class TableFormsModule { }
