export class CreateContactDto {
  name: string;
  phone: string;
  email: string;
}

export class ContactResponseDto {
  name: string;
  phone: string;
  email: string;
}

export class UpdateContactDto {
  name: string;
  phone: string;
  email: string;
}

export class FindContactResponseDto {
  id: string;
  name: string;
}
