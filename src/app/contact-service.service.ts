import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IContacts } from "./contacts";

@Injectable({
  providedIn: "root",
})
export class ContactServiceService {
  private _url: string = "/assets/contacts.json";

  constructor(private _http: HttpClient) {}

  getContacts(): Observable<IContacts[]> {
    return this._http.get<IContacts[]>(this._url);
  }
}
