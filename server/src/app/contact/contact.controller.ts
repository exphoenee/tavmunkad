import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { get } from 'https';

@Controller('contacts')
export class ContactController {
  @Get()
  getContact() {
    return 'All contacts';
  }

  @Get('/:contactId')
  getContactById(@Param('contactId') contactId: string) {
    return `Get olnly contact with id: ${contactId}`;
  }

  @Post()
  creatContact(@Body() body) {
    return `Create a contact with data: ${JSON.stringify(body)}`;
  }

  @Put('/:contactId')
  updateContact(@Param('contactId') contactId: string, @Body() body) {
    console.log(body);
    return `Update a contact with id: ${contactId} with data: ${JSON.stringify(
      body,
    )}`;
  }

  @Delete('/:contactId')
  DeleteContact(@Param('contactId') contactId: string) {
    return `Deleted the contact with  ${contactId} id`;
  }
}
