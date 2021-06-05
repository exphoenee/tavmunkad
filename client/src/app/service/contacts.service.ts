import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getAllContacts() {
    return this.http.get<any>('http://localhost:5000/api/users').pipe(
      map((user) => {
        console.log(user);
        return user;
      })
    );
  }
}
