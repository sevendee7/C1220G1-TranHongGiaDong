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
            "\n3. Date of birth: " + this.birth + "\n4. Email: " + this.email +
            "\n5. Address: " + this.address + "\n6. Type of Customer: " + this.customerType +
            "\n7. Discount: " + this.discount + "\n8. Quantity accompany: " + this.quantity +
            "\n9. Rent Days: " + this.rentDay + "\n10. Type of Service: " + this.serviceType +
            "\n11. Type of Room: " + this.roomType;
    }
}
