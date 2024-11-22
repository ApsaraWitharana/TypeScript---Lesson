var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo = /** @class */ (function () {
    function Demo(myVar) {
        this.myVar = myVar;
    }
    Demo.prototype.getmyVar = function () {
        return this.myVar;
    };
    Demo.prototype.setmyVar = function (str) {
        this.myVar = str;
    };
    return Demo;
}());
var demo1 = new Demo("hii");
var res = demo1.getmyVar();
console.log(res);
//
var Demo2 = /** @class */ (function () {
    function Demo2(id, Name, address, tele) {
        this.id = id;
        this.Name = Name;
        this.address = address;
        this.tele = tele;
    }
    Demo2.prototype.getid = function () {
        return this.id;
    };
    Demo2.prototype.setid = function (num) {
        this.id = num;
    };
    Demo2.prototype.getName = function () {
        return this.Name;
    };
    Demo2.prototype.setName = function (str) {
        this.Name = str;
    };
    Demo2.prototype.getaddress = function () {
        return this.address;
    };
    Demo2.prototype.setaddress = function (str) {
        this.address = str;
    };
    Demo2.prototype.gettele = function () {
        return this.tele;
    };
    Demo2.prototype.settele = function (num) {
        this.tele = num;
    };
    return Demo2;
}());
var demo = new Demo2(123, "sachini", "matara", 123456);
var getid = demo.getid();
var getName = demo.getName();
var getaddress = demo.getaddress();
var gettele = demo.gettele();
console.log(getid, getName, getaddress, gettele);
demo.settele(12345);
console.log(getid);
var SimpleCustomer = /** @class */ (function () {
    function SimpleCustomer() {
    }
    return SimpleCustomer;
}());
var VIPCustomer = /** @class */ (function () {
    function VIPCustomer() {
    }
    return VIPCustomer;
}());
//=============== inheritence ==================//
// inheriteuna class eke withryi eke athule withrk krnn pulunw ek protect hinda
var Parent = /** @class */ (function () {
    function Parent(massage) {
        console.log(massage, 'from psrent class');
    }
    Parent.prototype.myMethod = function (str) {
        console.log(str);
    };
    return Parent;
}());
var Chiled = /** @class */ (function (_super) {
    __extends(Chiled, _super);
    function Chiled(massage) {
        var _this = _super.call(this, massage) || this;
        _this.myMethod("hellow");
        return _this;
    }
    return Chiled;
}(Parent));
var Chiled1 = new Chiled('hellow world');
//Chiled1.myMethod('hellow');
//Chiled1.id;
