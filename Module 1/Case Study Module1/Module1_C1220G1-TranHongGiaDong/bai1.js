function submitform() {
    let name = document.getElementById("name").value;
    let idNumber = document.getElementById("idnumber").value;
    let dateOfBirth = document.getElementById("dateofbirth").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let customerMember = document.getElementById("customermember").value;
    let discount = document.getElementById("discount").value;
    let numberOfPeople = document.getElementById("pax").value;
    let numberOfDay = document.getElementById("nights").value;
    let typeOfService = document.getElementById("service").value;
    let typeOfRoom = document.getElementById("typeofroom").value;
    let price = (parseInt(typeOfService) * parseInt(numberOfDay) * ( 1 - parseInt(discount)/100));
    document.writeln("Confirm information");
    document.write("<br>");
    document.writeln("Name : " + name);
    document.write("<br>");
    document.writeln("ID Number: " + idNumber);
    document.write("<br>");
    document.writeln("Date of birth" + dateOfBirth);
    document.write("<br>");
    document.writeln("Email :" + email);
    document.write("<br>");
    document.writeln("Address :" + address);
    document.write("<br>");
    document.writeln("Membership :" + customerMember);
    document.write("<br>");
    document.writeln("Number of day :" + numberOfDay);
    document.write("<br>");
    document.writeln("Number of people :" + numberOfPeople);
    document.write("<br>");
    document.writeln("Type of service :" + typeOfService);
    document.write("<br>");
    document.writeln("Type of room :" + typeOfRoom);
    document.write("<br>");
    document.writeln("Total price =" + price + "$");
}