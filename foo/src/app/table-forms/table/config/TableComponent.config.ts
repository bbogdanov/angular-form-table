import {ITableComponentConfig} from './ITableComponent.config';

export class TableComponentConfig implements ITableComponentConfig {
  private showHeaders: boolean;

  constructor(showHeaders: boolean = false) {
    this.showHeaders = showHeaders;
  }

  public get addHeaders() {
    return this.showHeaders;
  }

  public set addHeaders(value: boolean) {
    this.showHeaders = value;
  }

}
