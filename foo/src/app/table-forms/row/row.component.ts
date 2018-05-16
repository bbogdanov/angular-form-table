import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {

  @Input()
  public row: AbstractControl;

}
