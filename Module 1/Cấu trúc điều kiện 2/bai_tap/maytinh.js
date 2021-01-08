let chuoiSo = "";
let ketQua = "";
function numbOne() {
    let so1 = document.getElementById("one").value;
    chuoiSo += so1;
    document.getElementById("showResult").value=chuoiSo;
}
function numbTwo() {
    let so2 = document.getElementById("two").value;
    chuoiSo += so2;
    document.getElementById("showResult").value=chuoiSo;
}
function numbThree() {
    let so3 = document.getElementById("three").value;
    chuoiSo += so3;
    document.getElementById("showResult").value=chuoiSo;
}
function numbFour() {
    let so4 = document.getElementById("four").value;
    chuoiSo += so4;
    document.getElementById("showResult").value=chuoiSo;
}
function numbFive() {
    let so5 = document.getElementById("five").value;
    chuoiSo += so5;
    document.getElementById("showResult").value=chuoiSo;
}
function numbSix() {
    let so6 = document.getElementById("six").value;
    chuoiSo += so6;
    document.getElementById("showResult").value=chuoiSo;
}
function numbSeven() {
    let so7 = document.getElementById("seven").value;
    chuoiSo += so7;
    document.getElementById("showResult").value=chuoiSo;
}
function numbEight() {
    let so8 = document.getElementById("eight").value;
    chuoiSo += so8;
    document.getElementById("showResult").value=chuoiSo;
}
function numbNine() {
    let so9 = document.getElementById("nine").value;
    chuoiSo += so9;
    document.getElementById("showResult").value=chuoiSo;
}
function numbZero() {
    let so0 = document.getElementById("zero").value;
    chuoiSo += so0;
    document.getElementById("showResult").value=chuoiSo;
}
function Addition() {
    let cong = document.getElementById("plus").value;
    chuoiSo += cong;
    document.getElementById("showResult").value=chuoiSo;

}
function Subtraction() {
    let tru = document.getElementById("subtract").value;
    chuoiSo += tru;
    document.getElementById("showResult").value=chuoiSo;
}
function Muti() {
    let nhan = document.getElementById("muti").value;
    chuoiSo += nhan;
    document.getElementById("showResult").value=chuoiSo;
}
function division() {
    let chia = document.getElementById("division").value;
    chuoiSo += chia;
    document.getElementById("showResult").value=chuoiSo;
}
function equalTo() {
    ketQua = eval(chuoiSo);
    document.getElementById("showResult").value=ketQua;
}
function reset() {
    document.getElementById("showResult").value = "";
}