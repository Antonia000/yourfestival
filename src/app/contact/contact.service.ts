import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, } from 'rxjs/operators';

@Injectable()

export class ContactService{

    constructor(private http:HttpClient){

    }
    postUrl = '/t';

    sendForm(feedback:Object){

        return this.http.post<Object>(this.postUrl, feedback)
        .pipe(
        catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 200) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('Posted successfully!');
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return 'ok';
      }
}