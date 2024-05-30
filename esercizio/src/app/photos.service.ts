import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { iPhoto } from './i-photos';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    constructor(private http: HttpClient) {}

    getPhotos(): Observable<iPhoto[]> {
      return this.http.get<iPhoto[]>(this.apiUrl).pipe(
        catchError(this.handleError)
      );
    }

    deletePhoto(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
        catchError(this.handleError)
      );
    }

    private handleError(error: HttpErrorResponse) {
      console.error('An error occurred:', error.message);
      return throwError('Something went wrong; please try again later.');
    }
  }

