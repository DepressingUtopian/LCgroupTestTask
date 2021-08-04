import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';

import { IUser, keysOfIUser, UsersService } from '../users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [UsersService]
})
export class TableComponent implements OnInit {
  usersData: IUser[] = [];
  readonly tableHeaders: string[] = ["#", "Имя", "Возраст", "Пол", "Департамент", "Адрес"];
  nameProps: keysOfIUser = "id";
  usersPropsNames: { propName: keysOfIUser, header: string }[] = [];

  constructor(private usersService: UsersService, private changeDetection: ChangeDetectorRef) {
  }

  private updateUsersPropsNames(): void {
    if (this.usersData && this.usersData?.length > 0) {
      this.usersPropsNames = [];
      const propsNames = Object.keys(this.usersData[0]) as keysOfIUser[];

      if (propsNames.length === this.tableHeaders.length) {
        propsNames.forEach((propName, index) => {
          const header = this.tableHeaders[index];
          this.usersPropsNames.push({ propName, header });
        });
      }
      console.log(this.usersPropsNames);
    }
  }

  public showUsers(): void {
    this.usersService.getUsers().subscribe((data: IUser[]) => {
      this.usersData = [...data];
      this.updateUsersPropsNames();
    });
  }

  sortUsersBy = ({propName, isDesc}:{propName: keysOfIUser | undefined, isDesc?: boolean}): void  => {
    
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
