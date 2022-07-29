import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.service.getUsers().subscribe((res: any) => {
      this.users = res.results
      // let iterableLogList = Object.keys(this.users);
      console.log(res.results);
    });
  }

}


