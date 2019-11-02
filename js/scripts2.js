// Business logic for Address Book

function AddressBook() {
    this.contacts = []
}

// Business logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
}

Contact.prototype.fullname = () =>{
 return this.firstName + " " + this.lastName;
}
