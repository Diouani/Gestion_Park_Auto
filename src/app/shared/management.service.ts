import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbCardBodyComponent } from '@nebular/theme';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
// import { UsermanagementModule } from '../Models/usermanagement/usermanagement.module';

@Injectable({
  providedIn: 'root',
})
export class UserManagementServiceService {
  Base_url = 'http://yourbaseurl.com/';
  setheaders() {
    return (
      new HttpHeaders()
        //.set('Authorization',null)//,'Bearer ' + this.token
        .set('Content-Type', 'application/json')
    );
  }
  headerss = this.setheaders();
  response: any;
  constructor(private httpClient: HttpClient) {}
  ListOfUsers() {
    const url = this.Base_url + 'ecommerce_services/admin/user';
    this.response = this.httpClient
      .get<any>(url)
      .pipe(retry(0), catchError(this.handleError));
    return this.response;
  }

  //{ headers: this.headerss }
  Create_Admin_User(body: any) {
    delete body.lastModifiedBy;
    delete body.userId;
    body.createdBy = 1;
    const url = this.Base_url + 'ecommerce_services/admin/user';
    const resp = this.httpClient
      .post<any>(url, body)
      .pipe(retry(0), catchError(this.handleError));
    return resp;
  }

  //{ headers: this.headerss }
  Update_Status(body: any): Observable<any> {
    const url =
      this.Base_url +
      'ecommerce_services/admin/user/updateStatus/' +
      body.userId;
    const response = this.httpClient
      .post<any>(url, body)
      .pipe(retry(0), catchError(this.handleError));
    return response;
  }

  Update_Admin_User(body: any) {
    delete body.userEmail;
    delete body.createdBy;
    body.lastModifiedBy = 1;
    const url = this.Base_url + 'ecommerce_services/admin/user';
    console.log(url);
    const response = this.httpClient
      .put<any>(url, body)
      .pipe(retry(0), catchError(this.handleError));
    return response;
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      console.log(error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error.error.status);
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError({ status: error.error.status, msg: error.error.msg });
  }
}
