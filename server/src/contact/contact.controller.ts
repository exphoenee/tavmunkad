import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import {
  CreateContactDto,
  UpdateContactDto,
  FindContactResponseDto,
  ContactResponseDto,
} from './dto/contact.dto';

@Controller('contacts')
export class ContactController {
  @Get()
  getContact(): FindContactResponseDto[] {
    return 'All contacts';
  }

  @Get('/:contactId')
  getContactById(
    @Param('contactId') contactId: string,
  ): FindContactResponseDto {
    return `Get olnly contact with id: ${contactId}`;
  }

  @Post()
  creatContact(@Body() body: CreateContactDto): ContactResponseDto {
    return `Create a contact with data: ${JSON.stringify(body)}`;
  }

  @Put('/:contactId')
  updateContact(
    @Param('contactId') contactId: string,
    @Body() body: UpdateContactDto,
  ): ContactResponseDto {
    return `Update contact with id: ${contactId} data: ${JSON.stringify(body)}`;
  }

  @Delete('/:contactId')
  DeleteContact(@Param('contactId') contactId: string): ContactResponseDto {
    return `Deleted the contact with  ${contactId} id`;
  }
}
