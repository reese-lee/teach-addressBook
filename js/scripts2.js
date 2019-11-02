// Business logic for Address Book

function AddressBook() {
    this.contacts = [],
    this.currentId = 0
}

AddressBook.prototype.addContact = contact => {
    contactId = this.assignId();
    this.contacts.push(contact);
}

AddressBook.prototype.assignId = () => {
    this.currentId += 1;
    return this.currentId
}

// Business logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
}

Contact.prototype.fullname = () => {
 return this.firstName + " " + this.lastName;
}
