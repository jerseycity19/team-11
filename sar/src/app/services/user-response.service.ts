import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { UserResponse } from '../models/user-response';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

@Injectable({
  providedIn: 'root'
})
export class UserResponseService {

  constructor(
    public http: HttpClient,
    public httpM: HttpClientModule
  ) { }

  submitUserResponse(userResponse: UserResponse): Observable<UserResponse> {
    var url = 'api/firstScreen';
    // alert("submitting user response");

    return this.http.post<UserResponse>(url, userResponse, httpOptions).pipe(
      // catchError(this.handleError('submitUserResponse', userResponse))
    );
    // <UserResponse>(url, userResponse);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
