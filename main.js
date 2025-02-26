/**
 Nhập vào 1 chuỗi
    1.Đếm có bao nhiêu ký tự thường
    2.Bao nhiêu ký tự in hoa
    3.Bao nhiêu số
    4.bao nhiêu khoảng trắng(Space)
 */
let chuoi = prompt("Nhập vào đây:");
if (chuoi == null) {
  chuoi = prompt("Không được để trống:");
}
let kytu = 0;
let so = 0;
let chuInHoa = 0;
let Space = 0;
for (let i = 0; i < chuoi.length; i++) {
  console.log(chuoi[i]);
  let char = chuoi[i];
  if (char >= "0" && char <= "9") {
    so++;
  } else if (char >= "a" && char <= "z") {
    kytu++;
  } else if (char >= "A" && char <= "Z") {
    chuInHoa++;
  } else if (char === " ") {
    Space++;
  }
}
console.log(`=================
    Số ký tự thường là: ${kytu}
    Số ký tự in hoa là: ${chuInHoa}
    Số chữ số là: ${so}
    Số khoảng trắng là: ${Space}`);
