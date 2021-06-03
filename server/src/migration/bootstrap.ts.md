import { getRepository } from 'typeorm';
import { Contact } from 'src/entity/contact';
import { contacts as mockDb } from '../mockdb/db';
import 'reflect-metadata';

export const Bootstrap = () => {
const contactRepository = getRepository(Contact);
const contact = contactRepository.create({
name: 'Bozzay Viktor',
email: 'bozzay.viktor@gmail.com',
phone: '+36306106608',
});
contactRepository.save(contact).catch((err) => {
console.log('Error: ', err);
});
console.log('New contact saved: ', contact);
};
