var date=new Date();
function formatDate(date){ 
    var diff =new Date()-date;
    if (diff<1000){
        alert(diff+" прямо сейчас"); 
    }
    else if (diff<60000){
        alert(Math.floor(diff/1000)+ " сек. назад")

    }
    else if (diff<3600000){
        alert(Math.floor(diff/60000)+" мин.назад")
    }
    else{
        alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );
    }


//      alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

//     alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
//     alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );


}
