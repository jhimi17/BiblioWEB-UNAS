import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/login.interface";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user: BehaviorSubject<any>;

  public get userToken(): any {
    return this.user.value;
  }

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("token"))
    );
  }

  login(req: Login, authType: string): Observable<any> {
    localStorage.setItem("authType", "Interno");
    const requestUrl = "";
    return this.http.post<any>(requestUrl, req).pipe(
      map((resp: any) => {
        if (resp.isSuccess) {
          localStorage.setItem("token", JSON.stringify(resp.data));
          this.user.next(resp.data);
        }

        return resp;
      })
    );
  }

 

  logout() {
    localStorage.removeItem("token");
    this.user.next(null);
    window.location.reload();
  }
}

