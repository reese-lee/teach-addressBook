function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
    return this.firstName + this.lastName;
}

let contact1 = new Contact("Jenny", "Boner", 5499);
let contact2 = new Contact("Bob", "Szalensky", 2233);
let contact3 = new Contact("Eli", "Jones", 0988);
let contact4 = new Contact("Nina", "Abbie", 6622);

let school1 = {
    name: "Epicodus",
    students: [ contact1, contact2 ]
}

let school2 = {
    name: "Tech Academy",
    students: [ contact3, contact4 ]
}

let schools = [ school1, school2 ];

schools.forEach(school => {
    console.log(school.name + " has the following students: ");
    school.students.forEach(student => {
        console.log(student.firstName);  
    });

});
