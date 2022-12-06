function myFuntion() {
    var cu = document.getElementById('socu').value;
    var moi = document.getElementById('somoi').value;
    var giadien = document.getElementById('gia').value;
    // var tien = document.getElementById('kq');
    // var sudung = document.getElementById('dung');

    console.log(cu);
    if(giadien < 1 || giadien >150){
        window.alert(" moi nhap lai");
        giadien = 0;
    } else{
        var tien = (moi - cu ) * giadien;
        document.getElementById('kq').value = tien;
        if(tien > 1000){
        document.getElementById('dung').innerHTML.value = "Kinh doanh";
     }else{
    document.getElementById('dung').innerHTML.value = "Gia đình";
}
    }
   
}