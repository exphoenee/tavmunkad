import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { get } from 'https';

@Controller('contacts')
export class ContactController {
  @Get()
  getContact() {
    return 'All contacts';
  }

  @Get('/:contactId')
  getContactById() {
    let contactId;
    return `Get olnly contact with  ${contactId} id`;
  }

  @Post('')
  creatContact() {
    let contactId;
    return `Create a contact  ${contactId} id`;
  }

  @Put('/:contactId')
  updateContact() {
    let contactId;
    return `Update a contact with  ${contactId} id`;
  }

  @Delete('/:contactId')
  DeleteContact() {
    let contactId;
    return `Deleted the contact with  ${contactId} id`;
  }
}
