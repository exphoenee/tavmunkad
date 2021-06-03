import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
/*------------------------*/
import {
  CreateContactDto,
  UpdateContactDto,
  FindContactResponseDto,
  ContactResponseDto,
} from './dto/contact.dto';
import { ContactService } from '../contact/contact.service';
/*------------------------*/

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  getContact(): FindContactResponseDto[] {
    return this.contactService.getContacts();
  }

  @Get('/:contactId')
  getContactById(
    @Param('contactId') contactId: string,
  ): FindContactResponseDto {
    return this.contactService.getContactById(contactId);
  }

  @Post()
  creatContact(@Body() body: CreateContactDto): ContactResponseDto {
    return this.contactService.createContact(body);
  }

  @Put('/:contactId')
  updateContact(
    @Param('contactId') contactId: string,
    @Body() body: UpdateContactDto,
  ): ContactResponseDto {
    return this.contactService.updateContact(contactId, body);
  }

  @Delete('/:contactId')
  DeleteContact(@Param('contactId') contactId: string): ContactResponseDto[] {
    return this.contactService.deleteContact(contactId);
  }
}
