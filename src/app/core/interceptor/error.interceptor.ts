import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(retry(1), catchError(this.handleError));
	}

	handleError(error: any) {
		let errorMessage = '';

		if (error.error instanceof ErrorEvent) {
			errorMessage = `An error occurred: ${error.error.message}`;
		} else {
			errorMessage = `An error occurred:\nStatus: ${error.status}\nMessage: ${error.message}`;
		}

		return throwError(errorMessage);
	}
}
