// Business logic for Address Book

// Business Logic for AddressBook ---------
function AddressBook() {
    this.contacts = [],
    this.currentId = 0
  }
  
  AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts.push(contact);
  }
  
  AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }

AddressBook.prototype.findContact = function(id) {
    for (let i = 0; i < this.contacts.length; i++ ) {
        if (this.contacts[i].id == id) {
            return this.contacts[i];
        }
    };
    return false;
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
