import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';

import { IUser, keysOfIUser, UsersService } from '../users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [UsersService]
})
export class TableComponent implements OnInit {
  readonly filterPanelHeaders = ["Пол", "Департамент", "Город"];
  readonly tableHeaders: string[] = ["#", "Имя", "Возраст", "Пол", "Департамент", "Адрес"];

  usersData: IUser[] = [];
  nameProps: keysOfIUser = "id";
  tableColumnProps: { propName: keysOfIUser, header: string, isDesc: boolean, isActive: boolean }[] = [];
  sorts: any = {
    id: { active: false, isDesc: false },
    name: { active: false, isDesc: false },
    age: { active: false, isDesc: false },
    gender: { active: false, isDesc: false },
    department: { active: false, isDesc: false },
    address: { active: false, isDesc: false }
  }

  filters: { header: string, options: { key: string, value: string }[] }[] = [];

  constructor(private usersService: UsersService, private changeDetection: ChangeDetectorRef) {
  }

  private updateUsersPropsNames(): void {
    if (this.usersData && this.usersData?.length > 0) {
      this.tableColumnProps = [];
      const propsNames = Object.keys(this.usersData[0]) as keysOfIUser[];

      if (propsNames.length === this.tableHeaders.length) {
        propsNames.forEach((propName, index) => {
          const header = this.tableHeaders[index];
          const columnState = this.sorts[propName];
          this.tableColumnProps.push({ propName, header, isDesc: columnState.isDesc, isActive: columnState.active });
        });
      }
      console.log(this.tableColumnProps);
    }
  }

  public showUsers(): void {
    this.usersService.getUsers().subscribe((data: IUser[]) => {
      this.usersData = [...data];
      this.updateUsersPropsNames();
      this.createFilter();
    });
  }

  private resetActive(): void {
    for (let key in this.sorts) {
      this.sorts[key].active = false;
    }
  }

  private getFieldDataByFieldName = (fieldName: keysOfIUser) => {
    return this.usersData && this.usersData.map(item => item[fieldName]);
  }

  private convertFieldDataToString = (data: any): string => {
    if (data.city || data.street) {
      return `${data.city}, ${data.street}`;
    } 

    return data.toString();
  }

  private createOptionsFromFieldName = (fieldName: keysOfIUser) => {
    const fieldData = this.getFieldDataByFieldName(fieldName);
    return fieldData && fieldData.map(item => {
      const converted: string = this.convertFieldDataToString(item);
      return { key: converted, value: converted };
    });
  }

  private createFilter = () => {
    this.filters = [
      {
        header: "Пол",
        options: this.createOptionsFromFieldName('gender'),
      },
      {
        header: "Департамент",
        options: this.createOptionsFromFieldName('gender'),
      },
      {
        header: "Город",
        options: this.createOptionsFromFieldName('gender'),
      }
    ];
  }

  public sortColumn = ({ propName }: { propName?: keysOfIUser, isDesc?: boolean, isActive?: boolean }) => {

    // Сброс активности у колонок
    this.resetActive();

    propName && (() => {
      this.sorts[propName].isDesc = !this.sorts[propName].isDesc;
      this.sorts[propName].active = true;
    })();

    this.sortUsersByProp({ propName, isDesc: propName && this.sorts[propName].isDesc });
  }

  private sortUsersByProp = ({ propName, isDesc }: { propName: keysOfIUser | undefined, isDesc?: boolean }): void => {

    (this.usersData && propName && this.usersData.sort((user1: IUser, user2: IUser) => {

      if (user1[propName] > user2[propName]) {
        return isDesc ? -1 : 1;
      } else if (user1[propName] < user2[propName]) {
        return isDesc ? 1 : -1;
      }
      return 0;
    }));


    this.updateUsersPropsNames();
  }

  ngOnInit(): void {
    this.showUsers();
  }
}
