// abstract class
abstract class Rikkei {
  public taxCode: number;
  public stakeHoler: any[];

  // Khởi tạo ra constructor (Bản thiết của một đối tượng)
  constructor(taxCode: number, stakeHolder: any[]) {
    this.taxCode = taxCode;
    this.stakeHoler = [{ name: "Nguyễn Văn A", age: 21 }];
  }

  // Tao ham
  abstract getTaxCode(): void;
}

// Kế thừa lại class Rikkei
class RikkeiAcademy extends Rikkei {
  public companyName: string;

  // Khởi tạo constructor
  constructor(taxCode: number, stakeHolder: any[], companyName: string) {
    super(taxCode, stakeHolder);
    this.companyName = companyName;
  }

  // Triển khai hàm getTaxCode
  override getTaxCode(): void {
    console.log(this.taxCode);
  }
}

// Khởi tạo đối tượng
const rikkei1 = new RikkeiAcademy(
  1,
  [{ name: "Khải", age: 19 }],
  "Riikei Academy"
);

// console.log("rikkei 1==>", rikkei1.getTaxCode());

// bài tập:
// Xây dựng một kiến trúc như sau:
// Có một abstract class tên là shape, trong shape có một abstract method là tính diện tích
// Tạo 2 class là circle và square

abstract class Shape {
  abstract caculator(): number;
}

class Circle extends Shape {
  // Khai báo thuộc tính
  public radius: number;

  // Khai báo constructor
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  override caculator(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Square extends Shape {
  public edge: number;

  // Khai báo constructor
  constructor(edge: number) {
    super();
    this.edge = edge;
  }

  caculator(): number {
    return this.edge * this.edge;
  }
}

// // Triển khai class Circle
// const circle = new Circle(4);

// // Triển khai class Square
// const square = new Square(5);

// console.log("Diện tích hình tròn: ", circle.caculator());
// console.log("Diện tích hình vuông: ", square.caculator());

// Interface
interface Sales {
  name: string;
  sale(): void;
}

interface Marketing {
  marketing(): void;
}

class Employee implements Sales, Marketing {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  marketing(): void {
    console.log("Method implemented interface Marketing.");
  }

  sale(): void {
    console.log("Method implemented interface Sales.");
  }
}

// Khởi tạo đối tượng Employee
const employee1 = new Employee("Anh Tuyến dz");

// console.log(employee1.marketing());

// Cho một danh sách gồm 1000 sinh viên là sinh viên trường Đại học GTVT có các thông tin sau:
// name, tên trường,...

class Student {
  studentName: string;
  static schoolName: string = "Đại học Giao thông Vận tải";

  constructor(studentName: string, schoolName: string) {
    this.studentName = studentName;
  }

  static getSchoolName(): string {
    return this.schoolName;
  }
}

// Cần khởi tạo đối tượng
const student1 = new Student("Bé Khải", "Đại học Giao thông vận tải");
console.log("student1==>", student1);

// Không cần phải khởi tạo đối tượng
const student2 = Student.getSchoolName();
console.log("Student 2==>", student2);

// Bài tập: Viết một chương trình quản lý kho hàng (Hàng tồn kho), áp dụng interface và abstract để thực hiện
// Các trường bao gồm: id, quantity, productName và thực hiẹn tính tôngr số lượng sản phẩm

interface Product {
  id: number;
  productName: string;
  quantity: number;

  // Hàm tỉnh tổng số lượng
  caculatorQuantity(): void;
}

const total: number[] = [];

class ProductItem implements Product {
  id: number;
  productName: string;
  quantity: number;

  // Khai báo constructor
  constructor(id: number, productName: string, quantity: number) {
    this.id = id;
    this.productName = productName;
    this.quantity = quantity;
  }

  caculatorQuantity(): void {
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
