import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  TableComponent, RowComponent, CellComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class TableFormsModule { }
