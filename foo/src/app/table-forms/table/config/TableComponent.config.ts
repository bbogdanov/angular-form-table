import {ITableComponentConfig} from './ITableComponent.config';

export class TableComponentConfig implements ITableComponentConfig {
  public showHeaders: boolean;

  constructor(showHeaders: boolean = false) {
    this.showHeaders = showHeaders;
  }

}
