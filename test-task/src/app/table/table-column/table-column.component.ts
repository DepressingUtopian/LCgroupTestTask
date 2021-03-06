import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IUser, keysOfIUser } from 'src/app/users.service';

@Component({
  selector: 'app-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.scss']
})
export class TableColumnComponent implements OnInit, OnChanges {

  @Input() userName: string = "";
  @Input() data: IUser[] = [];
  @Input() columnData: { propName: keysOfIUser, header: string, isDesc: boolean, isActive: boolean } | null = null;

  @Output() onSort = new EventEmitter<{propName?: keysOfIUser}>();
  columnContent: string[] = [];

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.columnData && this.data) {
      this.columnContent = this.data.map((elem) => {
        if(this.columnData?.propName === "address") {
          const {city, street} = elem[this.columnData.propName];
          return `${city}, ${street}`;
        }

        return this.columnData?.propName ? elem[this.columnData.propName].toString() : "";
      });
    }

  }

  sortColumnByPropName() {
    this.onSort && this.onSort.emit({propName: this.columnData?.propName});
  }
}
