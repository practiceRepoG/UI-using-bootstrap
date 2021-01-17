let flag = false;
function menuDrop() {
    if (flag) {
        document.getElementById("drpMenu").style.display = "block";
        document.getElementById("burger").style.display = "none";
        flag = !flag;
    }
    else {
        document.getElementById("drpMenu").style.display = "none";
        document.getElementById("burger").style.display = "block";
        flag = !flag;
    }
}