import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, RowComponent, CellComponent]
})
export class TableFormsModule { }
