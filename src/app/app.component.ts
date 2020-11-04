import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Intershala-Project';
  constructor(private appService: AppServiceService) {}

  usersList: [];
  inputValue: string;
  searchedUser: {};
  userNotFoundAlert: boolean;
  requiredId: string;
  requiredEmail: string;
  requiredFName: string;
  requiredLName: string;

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.appService.getUser().subscribe(res => {
      this.usersList = res['data'];
    });
  }

  onSearch() {
    this.userNotFoundAlert = null;
    this.searchedUser = undefined;
    for (const user of this.usersList) {
      if (user['email'] === this.inputValue) {
        this.searchedUser = user;
        break;
      }
      else if (user['first_name'] === this.inputValue) {
        this.searchedUser = user;
        break;
      } else if (user['last_name'] === this.inputValue) {
        this.searchedUser = user;
        break;
      }
    }

    if (this.searchedUser === undefined) {
      this.userNotFoundAlert = true;
    } else {
      this.requiredId = this.searchedUser['id'];
      this.requiredEmail = this.searchedUser['email'];
      this.requiredFName = this.searchedUser['first_name'];
      this.requiredLName = this.searchedUser['last_name'];
    }

    this.inputValue = '';
  }
}
