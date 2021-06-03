import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
/*------------------------*/

import { contacts } from '../db';
import {
  FindContactResponseDto,
  CreateContactDto,
  ContactResponseDto,
  UpdateContactDto,
} from './dto/contact.dto';
/*------------------------*/

@Injectable()
export class ContactService {
  private contacts = contacts;

  getContacts(): FindContactResponseDto[] {
    return this.contacts;
  }

  getContactById(contactId: string): FindContactResponseDto {
    return this.contacts.find((contact) => {
      return contactId === contact.id;
    });
  }

  createContact(payload: CreateContactDto): ContactResponseDto {
    let newContact = { id: uuid(), ...payload };
    this.contacts.push(newContact);
    return newContact;
  }

  updateContact(
    contactId: string,
    payload: UpdateContactDto,
  ): ContactResponseDto {
    let updatedContact: ContactResponseDto;

    const updatedContactList = this.contacts.map((contact) => {
      if (contact.id === contactId) {
        updatedContact = { id: contactId, ...payload };
        return updatedContact;
      } else return contact;
    });

    //na ilyet igazából nem szabadna... :( ...de most nincs adatbázis
    this.contacts = updatedContactList;

    return updatedContact;
  }

  deleteContact(contactId: string): ContactResponseDto[] {
    const updatedContactList = this.contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    const deletedContacts = this.contacts.filter((contact) => {
      return contact.id === contactId;
    });

    //na ilyet igazából nem szabadna... :( ...de most nincs adatbázis
    this.contacts = updatedContactList;

    return deletedContacts;
  }
}

const x = new ContactService();
