import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },

  { path: "login", component: LoginComponent },

  { path: "dashboard", component: DashboardComponent },

  { path: "error", component: ErrorPageComponent },

  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
