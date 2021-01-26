class Employee {
    constructor(name, id, birth, email, phone, educationLevel, position, salary) {
        this.name = name;
        this.id = id;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.educationLevel = educationLevel;
        this.position = position;
        this.salary = salary;
    }
    setName (name) {
        this.name = name;
    }
    getName () {
        return this.name;
    }
    setId (id) {
        this.id = id;
    }
    getId () {
        return this.id;
    }
    setBirth (birth) {
        this.birth = birth;
    }
    getBirth () {
        return this.birth;
    }
    setEmail (email) {
        this.email = email;
    }
    getEmail () {
        return this.email;
    }
    setPhone (phone) {
        this.phone = phone;
    }
    getPhone () {
        return this.phone;
    }
    setEducationLevel (education) {
        this.educationLevel = education;
    }
    getEducationLevel () {
        return this.educationLevel;
    }
    setPosition (position) {
        this.position = position;
    }
    getPosition () {
        return this.position;
    }
    setSalary (salary) {
        this.salary = salary;
    }
    getSalary () {
        return this.salary ;
    }
    getInfo() {
        return "1. Name: " + this.name + "\n2. ID Card: " + this.id +
            "\n3. Date of birth: " + this.birth + "\n4. Email: " + this.email +
            "\n5. Phone: " + this.phone + "\n6. Education level: " + this.educationLevel +
            "\n7. Position: " + this.position + "\n8. Salary: " + this.salary;
    }
}
