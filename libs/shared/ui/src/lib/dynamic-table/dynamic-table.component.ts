import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ColumnSpec } from './column-spec';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DynamicTableConfig } from './DynamicTableConfig';
import { CustomColumnDirective } from './custom-column.directive';
import { DatePipe, NgClass, NgTemplateOutlet } from '@angular/common';

export function DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY(): DynamicTableConfig {
  return {
    dateFormat: 'dd.MM.yyyy HH:mm',
    pageSizeOptions: [10, 20, 50, 100],
  };
}

export const DYNAMIC_TABLE_DEFAULT_CONFIG =
  new InjectionToken<DynamicTableConfig>('br-dynamic-table-default-config', {
    providedIn: 'root',
    factory: DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY,
  });

export interface ViewContext<T> {
  $implicit: T;
  index: number;
}

@Component({
  selector: 'bierrallye-shared-ui-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    NgClass,
    NgTemplateOutlet,
    MatPaginatorModule,
    DatePipe,
  ],
})
export class DynamicTableComponent<T> {
  dataSource = new MatTableDataSource<T>();

  @Input() set data(data: T[]) {
    this.dataSource.data = data;
  }

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @Input() columnSpecs!: ColumnSpec<T>[];
  @Input() disablePaginator?: boolean;
  @Input() columnsExcludedFromSort: Extract<keyof T | string, string>[] = [];

  @Input() set dateFormat(format: string) {
    this._dateFormat = format;
  }

  @Input() set pageSizeOptions(pageSizeOptions: number[]) {
    this._pageSizeOptions = pageSizeOptions;
    if (pageSizeOptions.length > 0) {
      this._pageSize = pageSizeOptions[0];
    }
  }

  @Output() pageChanged: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();

  /*Internal fields*/
  _dateFormat!: string;
  _pageSizeOptions!: number[];
  _pageSize!: number;

  @ContentChildren(CustomColumnDirective)
  templateRefs: QueryList<CustomColumnDirective> =
    new QueryList<CustomColumnDirective>();

  public BR_PREFIX = 'br-column-';

  constructor(
    protected elementRef: ElementRef,
    @Inject(DYNAMIC_TABLE_DEFAULT_CONFIG) tableConfig: DynamicTableConfig
  ) {
    // merge default config with custom config
    tableConfig = {
      ...DYNAMIC_TABLE_DEFAULT_CONFIG_FACTORY(),
      ...tableConfig,
    };

    if (tableConfig) {
      if (tableConfig.dateFormat) {
        this._dateFormat = tableConfig.dateFormat;
      }

      if (tableConfig.pageSizeOptions) {
        this._pageSizeOptions = tableConfig.pageSizeOptions;
        this._pageSize = this._pageSizeOptions[0];
      }
    }
  }

  isSerializedDate(value: any): boolean {
    return value instanceof Date;
  }

  getDisplayedColumns(): string[] {
    return this.columnSpecs.map((columSpec) => columSpec.displayedColumn);
  }

  isColumnSorted(columnName: Extract<keyof T | string, string>): boolean {
    return !this.columnsExcludedFromSort.includes(columnName);
  }

  isInjected(columnName: Extract<keyof T | string, string>): boolean {
    return !!this.templateRefs.find(
      (directive) => directive.columnName === columnName
    );
  }

  getViewContext(element: T, index: number): ViewContext<T> {
    return {
      $implicit: element,
      index,
    };
  }

  getInjectedTemplateRef(
    columnName: Extract<keyof T | string, string>
  ): TemplateRef<any> | null {
    const find = this.templateRefs.find(
      (directive) => directive.columnName === columnName
    );
    return find ? find.templateRef : null;
  }

  onPageChanged(event: PageEvent): void {
    this.pageChanged.emit(event);
  }
}
