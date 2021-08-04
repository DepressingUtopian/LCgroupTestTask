import { Component, OnInit } from '@angular/core';

import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [UsersService]
})
export class TableComponent implements OnInit {
  usersData: IUser[] | undefined;

  constructor(private usersService: UsersService) {}

  showUsers(): void {
    this.usersService.getUsers().subscribe((data: IUser[]) => this.usersData = [...data]);
  }

  ngOnInit(): void {
    this.showUsers();
  }

}
