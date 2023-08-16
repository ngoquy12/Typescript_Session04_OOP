"use strict";
// abstract class
class Rikkei {
    // Khởi tạo ra constructor (Bản thiết của một đối tượng)
    constructor(taxCode, stakeHolder) {
        this.taxCode = taxCode;
        this.stakeHoler = [{ name: "Nguyễn Văn A", age: 21 }];
    }
}
// Kế thừa lại class Rikkei
class RikkeiAcademy extends Rikkei {
    // Khởi tạo constructor
    constructor(taxCode, stakeHolder, companyName) {
        super(taxCode, stakeHolder);
        this.companyName = companyName;
    }
    // Triển khai hàm getTaxCode
    getTaxCode() {
        console.log(this.taxCode);
    }
}
// Khởi tạo đối tượng
const rikkei1 = new RikkeiAcademy(1, [{ name: "Khải", age: 19 }], "Riikei Academy");
// console.log("rikkei 1==>", rikkei1.getTaxCode());
// bài tập:
// Xây dựng một kiến trúc như sau:
// Có một abstract class tên là shape, trong shape có một abstract method là tính diện tích
// Tạo 2 class là circle và square
class Shape {
}
class Circle extends Shape {
    // Khai báo constructor
    constructor(radius) {
        super();
        this.radius = radius;
    }
    caculator() {
        return this.radius * this.radius * Math.PI;
    }
}
class Square extends Shape {
    // Khai báo constructor
    constructor(edge) {
        super();
        this.edge = edge;
    }
    caculator() {
        return this.edge * this.edge;
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
    marketing() {
        console.log("Method implemented interface Marketing.");
    }
    sale() {
        console.log("Method implemented interface Sales.");
    }
}
// Khởi tạo đối tượng Employee
const employee1 = new Employee("Anh Tuyến dz");
// console.log(employee1.marketing());
// Cho một danh sách gồm 1000 sinh viên là sinh viên trường Đại học GTVT có các thông tin sau:
// name, tên trường,...
class Student {
    constructor(studentName, schoolName) {
        this.studentName = studentName;
    }
    static getSchoolName() {
        return this.schoolName;
    }
}
Student.schoolName = "Đại học Giao thông Vận tải";
// Cần khởi tạo đối tượng
const student1 = new Student("Bé Khải", "Đại học Giao thông vận tải");
console.log("student1==>", student1);
// Không cần phải khởi tạo đối tượng
const student2 = Student.getSchoolName();
console.log("Student 2==>", student2);
const total = [];
class ProductItem {
    // Khai báo constructor
    constructor(id, productName, quantity) {
        this.id = id;
        this.productName = productName;
        this.quantity = quantity;
    }
    caculatorQuantity() {
        total.push(this.quantity);
    }
}
// Khởi tạo đối tượng ProductItem
const item1 = new ProductItem(1, "Trà", 10);
const item2 = new ProductItem(2, "Sữa", 20);
console.log(item1.caculatorQuantity());
console.log(item2.caculatorQuantity());
let count = 0;
// Tính tổng
for (let i = 0; i < total.length; i++) {
    count += total[i];
}
console.log("Tổng số lượng sản phẩm có trong kho==>", count);
