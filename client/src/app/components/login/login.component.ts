import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {}

  getAllContacts() {
    this.contactsService
      .getAllContacts()
      .subscribe((data) => console.log('Success: ', data));
  }
}
