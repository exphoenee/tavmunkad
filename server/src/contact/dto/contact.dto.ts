export class CreateContactDto {
  name: string;
  phone: string;
  email: string;
}

export class ContactResponseDto {
  id: string;
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
  phone: string;
  email: string;
}
