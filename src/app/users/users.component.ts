import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(response => {
        console.log(response);
          // this.users = response;
     })
  }

}
