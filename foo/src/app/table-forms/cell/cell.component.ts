import {Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import { AbstractControlOptions } from '@angular/forms/src/model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {

  @Input()
  public control;

}
