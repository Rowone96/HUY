// 1 Cách khai báo 1 mảng
//VD:
var arr = [];
var arrNumber = [1, 2, 3, 4, 5, 6];
let arrStr = ["hoang", "nam"];

//Cách lấy giá trị của phần tử trong mảng cũng như thay đổi giá trị
arrNumber[0];
// trong [] truyền vị trí của phần tử bắt đầu từ 0

// Cách duyệt mảng
// Dùng vòng for thường
for (let index = 0; index < arrNumber.length; index++) {
  console.log(arrNumber[index]);
}

//Dùng for in
for (const key in arrNumber) {
  console.log(arrNumber[key]);
  //key đại diện cho vị trí phần tử trong mảng ví dụ : 0, 1 ,2
}

//Dùng for of

for (const item of arrStr) {
  console.log(item);

  //item đại diện cho giá trị phần tử trong mảng. ví dụ trong trường hợp này in ra : hoang, nam
}

//MỘT SỐ PHƯƠNG THỨC DÙNG TRONG MẢNG

// toString()	Chuyển một mảng về dạng chuỗi ký tự.
// push()	Thêm một phần tử mới vào vị trí cuối mảng.
// pop()	Xóa phần tử nằm ở vị trí cuối mảng.
// unshift()	Thêm một phần tử mới vào vị trí đầu mảng.
// shift()	Xóa phần tử nằm ở vị trí đầu mảng.
// concat()	Ghép các mảng con lại với nhau rồi trả về một mảng mới.
// slice()	Trích xuất một phần của mảng ban đầu rồi trả về một mảng mới.
// splice()	Thêm hoặc xóa "một hoặc nhiều phần tử" ở vị trí bất kỳ trong mảng.
// length	Trả về số lượng phần tử của mảng.

// TÀI LIỆU THAM  KHẢO :https://www.w3schools.com/js/js_array_methods.asp
