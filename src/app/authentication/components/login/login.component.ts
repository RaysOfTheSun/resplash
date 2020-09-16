import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, Validators, AbstractControl, FormBuilder } from "@angular/forms";
import { AutenticationService } from "../../services/autentication.service";
import { AppDataService } from "../../../system/services/app-data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private router: Router,
    private frmBldr: FormBuilder,
    private auth: AutenticationService,
    private dataServ: AppDataService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.frmBldr.group({
      username: ["", [Validators.required, Validators.minLength(1)]],
      password: ["", [Validators.required, Validators.minLength(1)]],
    });
  }

  handleSubmit(e?: Event): void {
    if (this.loginForm.valid) {
      this.auth.authenticate(this.loginForm.value).subscribe((data) => {
        if (!data.authenticated) {
          this.errorMessage = data.message;
        } else {
          this.errorMessage = "";
          this.router.navigateByUrl("/");
        }
      });
    }
  }

  get username(): AbstractControl {
    return this.loginForm.get("username");
  }

  get passowrd(): AbstractControl {
    return this.loginForm.get("password");
  }
}
