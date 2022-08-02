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
  displayedColumns: string[] = ['dp', 'name', 'gender', 'location', 'e-mail', 'current age', 'registration seniority', 'phone number'];
  dataSource!: MatTableDataSource<any> ;
  usersData: any;
  show: boolean = false;
  apiResponse: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: UsersService) { }

  //code that runs on page initialization.
  ngOnInit(): void {
    this.getUsersList();
  }

  //fetch list of all users from api
  getUsersList() {
    this.service.getUsers().subscribe((res: any) => {
      this.usersData = res.results
        console.log(res.results);   

        this.dataSource = new MatTableDataSource(this.usersData);
        this.apiResponse = this.usersData;  //for gender filtering
        this.dataSource.paginator = this.paginator;  //paginator functionality
        this.dataSource.sort = this.sort;  //sort columns
    });
  }

  //search country by nationality abbreviation.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.toLowerCase();
  }

  //filter gender by selecting male or female.
  onChange($event: any) {
    let filteredData = _.filter(this.apiResponse, (item) => {
      return item.gender == $event.value;
    })
    this.dataSource = new MatTableDataSource(filteredData);
  }

  //add or remove columns
  toggleColumns() {
    this.show = !this.show;
  }

}


