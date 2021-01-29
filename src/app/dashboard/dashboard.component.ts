import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { ContactServiceService } from "../contact-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  list = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _service: ContactServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this._service
      .getContacts()
      .subscribe((data) => (this.dataSource.data = data));
    this.dataSource.data = this.list;
  }

  displayedColumns: string[] = ["FirstName", "LastName", "info"];
  dataSource = new MatTableDataSource(this.list);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logout() {
    this.router.navigate(["/", "login"]);
  }
}
