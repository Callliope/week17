function formatDate(){
    var date = new Date();
    var now=new Date();
    var diff =date-now;
    if (diff<1000){
        alert("прямо сейчас")
    }
    else if (diff<60000){
        alert(Math.floor(diff/1000)+ " сек. назад")

    }


}
formatDate()