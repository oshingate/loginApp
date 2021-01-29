import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { GetUserDataService } from "../get-user-data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userList;
  reqUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _user: GetUserDataService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this._user.userLoginData().subscribe((data) => (this.userList = data));
  }
  emailAddress;
  userName;
  pWord;
  listU;
  hide;
  submitFormMethod() {
    this.userList.filter = this.emailAddress.trim();
    this.reqUser = this.userList[0];
    this.userName = this.reqUser.UserName;
    if (
      this.emailAddress == this.reqUser.email &&
      this.pWord == this.reqUser.password
    ) {
      this.router.navigate(["/", "dashboard"]);
    } else {
      this.router.navigate(["/", "error"]);
    }
  }

  onLogin() {}
}
