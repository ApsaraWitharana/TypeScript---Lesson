// Define the interface
interface Icustomer {
  id: number;
  name: string;
}

// Implement the SimpleCustomer class
class SimpleCustomer implements Icustomer {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  displayCustomerInfo(): void {
    console.log(`Simple Customer - ID: ${this.id}, Name: ${this.name}`);
  }
}

// Implement the VIPCustomer class
class VIPCustomer implements Icustomer {
  id: number;
  name: string;
  membershipNumber: number;

  constructor(id: number, name: string, membershipNumber: number) {
    this.id = id;
    this.name = name;
    this.membershipNumber = membershipNumber;
  }

  displayCustomerInfo(): void {
    console.log(
      `VIP Customer - ID: ${this.id}, Name: ${this.name}, Membership Number: ${this.membershipNumber}`
    );
  }
}

// Usage Example
const simpleCustomer = new SimpleCustomer(1, "Alice");
simpleCustomer.displayCustomerInfo(); 

const vipCustomer = new VIPCustomer(2, "Bob", 1001);
vipCustomer.displayCustomerInfo(); 
