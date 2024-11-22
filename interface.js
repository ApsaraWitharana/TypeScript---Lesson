// Implement the SimpleCustomer class
var SimpleCustomer = /** @class */ (function () {
    function SimpleCustomer(id, name) {
        this.id = id;
        this.name = name;
    }
    SimpleCustomer.prototype.displayCustomerInfo = function () {
        console.log("Simple Customer - ID: ".concat(this.id, ", Name: ").concat(this.name));
    };
    return SimpleCustomer;
}());
// Implement the VIPCustomer class
var VIPCustomer = /** @class */ (function () {
    function VIPCustomer(id, name, membershipNumber) {
        this.id = id;
        this.name = name;
        this.membershipNumber = membershipNumber;
    }
    VIPCustomer.prototype.displayCustomerInfo = function () {
        console.log("VIP Customer - ID: ".concat(this.id, ", Name: ").concat(this.name, ", Membership Number: ").concat(this.membershipNumber));
    };
    return VIPCustomer;
}());
// Usage Example
var simpleCustomer = new SimpleCustomer(1, "Alice");
simpleCustomer.displayCustomerInfo();
var vipCustomer = new VIPCustomer(2, "Bob", 1001);
vipCustomer.displayCustomerInfo();
