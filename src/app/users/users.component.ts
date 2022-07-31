import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as _ from 'lodash';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  displayedColumns: string[] = ['name', 'gender', 'location', 'e-mail', 'current age', 'registration seniority', 'phone number'];
  dataSource!: MatTableDataSource<any> ;
  usersData: any;
  show: boolean = false;
  apiResponse: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // dataSource = new MatTableDataSource(this.users);

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.dataSource.paginator = this.paginator;
  }

  getUsersList() {
    this.service.getUsers().subscribe((res: any) => {
      this.usersData = res.results
        console.log(res.results);   

        this.dataSource = new MatTableDataSource(this.usersData);
        this.apiResponse = this.usersData;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  onChange($event: any) {
    let filteredData = _.filter(this.apiResponse, (item) => {
      return item.gender == $event.value;
    })
    this.dataSource = new MatTableDataSource(filteredData);
  }

  toggleColumns() {
    this.show = !this.show;
  }

}


