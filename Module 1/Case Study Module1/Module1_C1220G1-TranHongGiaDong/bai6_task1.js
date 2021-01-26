class Customer {
    constructor(name, id, birth, email, address, customerType, discount, quantity, rentDay, serviceType, roomType) {
        this.name = name;
        this.id = id;
        this.birth = birth;
        this.email = email;
        this.address = address;
        this.customerType = customerType;
        this.discount = discount;
        this.quantity = quantity;
        this.rentDay = rentDay;
        this.serviceType = serviceType;
        this.roomType = roomType;
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
    setAddress (address) {
        this.address = address;
    }
    getAddress () {
        return this.address;
    }
    setCustomerType (customerType) {
        this.customerType = customerType;
    }
    getCustomerType () {
        return this.customerType;
    }
    setDiscount (discount) {
        this.discount = discount;
    }
    getDiscount () {
        return this.discount;
    }
    setQuantity (quantity) {
        this.quantity = quantity;
    }
    getQuantity () {
        return this.quantity;
    }
    setRentDay (rentDay) {
        this.rentDay = rentDay;
    }
    getRentDay () {
        return this.rentDay;
    }
    setServiceType (serviceType) {
        this.serviceType = serviceType;
    }
    getServiceType () {
        return this.serviceType;
    }
    setRoomType (roomType) {
        this.roomType = roomType;
    }
    getRoomType () {
        return this.roomType;
    }
    getInfo() {
        return "1. Name: " + this.name + "\n2. ID Card: " + this.id +
            "\n3. Date of birth: " + this.birth + "\n 4. Email: " + this.email +
            "5. Address: " + this.address + "\n6. Type of Customer: " + this.customerType +
            "\n6. Discount: " + this.discount + "\n 7. Quantity accompany: " + this.quantity +
            "8. Rent Days: " + this.rentDay + "\n6. Type of Service: " + this.serviceType +
            "\n6. Type of Room: " + this.roomType;
    }
}
