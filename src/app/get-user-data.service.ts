import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iuser } from "./user";

@Injectable({
  providedIn: "root",
})
export class GetUserDataService {
  private url: string = "/assets/user.json";
  constructor(private http: HttpClient) {}

  userLoginData(): Observable<Iuser> {
    return this.http.get<Iuser>(this.url);
  }
}
