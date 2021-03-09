'use srtict';

let main= document.getElementById('salmon');
let i=0;
let header='';
let workinghours=['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];


for (let r=0;r<1;r++){
   
    header+='<tr>';
    for (let c=0;c<15;c++){
        header+= '<th>'+workinghours[c]+'</th>'
    }
    header+='</tr>';

    
}



function Cookies(mincust,maxcust,avgcookiessale){
    this.mincust=mincust;
    this.maxcust=maxcust;
    this.avgcookiessale=avgcookiessale;
    this.sale=function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (this.maxcust*this.avgcookiessale - this.mincust*this.avgcookiessale) + this.mincust*this.avgcookiessale); 
            }
}

let seattle= new Cookies(23,65,6.3);

let arr=[];
while ( i < 14) {
    
    seattle.sale();
    arr=['Seattle ',seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale(),seattle.sale()];
   
    
    
    i++
};



for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<15;c++){
        header+= '<td>'+arr[c]+'</td>'
        
    }
    header+='</tr>';
    
}



   
   

let tokyo= new Cookies(3,24,1.2);
let a=0;
let tarr='';
while ( a< 14) {
    tarr=['Tokyo ',tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale(),tokyo.sale()];
    
    a++
};

for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<15;c++){
        header+= '<td>'+tarr[c]+'</td>'
    }
    header+='</tr>';

}



let dubai= new Cookies(11,38,3.7);
let b=0
let darr='';
while ( b < 14) {
    darr=['Dubai ',dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale(),dubai.sale()];
    b++
};
for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<15;c++){
        header+= '<td>'+darr[c]+'</td>'
    }
    header+='</tr>';

}


let paris=new Cookies(20,38,2.3);
let c=0
let parr='';
while ( c < 14) {
    parr=['Paris',paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale()];
    c++
};
for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<15;c++){
        header+= '<td>'+parr[c]+'</td>'
    }
    header+='</tr>';

}


let lima=new Cookies(2,16,4.6);
let d=0
let larr='';
while ( d< 14) {

    larr=['Lima',lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale()];
    d++
};
for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<15;c++){
        header+= '<td>'+larr[c]+'</td>'
    }
    header+='</tr>';

}
let totalarr=['Total',arr[1]+tarr[1]+parr[1]+darr[1]+larr[1],arr[2]+tarr[2]+parr[2]+darr[2]+larr[2],arr[3]+tarr[3]+parr[3]+darr[3]+larr[3],arr[4]+tarr[4]+parr[4]+darr[4]+larr[4],arr[5]+tarr[5]+parr[5]+darr[5]+larr[5],arr[6]+tarr[6]+parr[6]+darr[6]+larr[6],arr[7]+tarr[7]+parr[7]+darr[7]+larr[7],arr[8]+tarr[8]+parr[8]+darr[8]+larr[8],arr[9]+tarr[9]+parr[9]+darr[9]+larr[9],arr[10]+tarr[10]+parr[10]+darr[10]+larr[10],arr[11]+tarr[11]+parr[11]+darr[11]+larr[11],arr[12]+tarr[12]+parr[12]+darr[12]+larr[12],arr[13]+tarr[13]+parr[13]+darr[13]+larr[13],arr[14]+tarr[14]+parr[14]+darr[14]+larr[14]];
for (let r=0;r<1;r++){
   
    header+='<tr>';
    for (let c=0;c<15;c++){
        header+= '<th>'+totalarr[c]+'</th>'
    }
    header+='</tr>';

    
};
document.write('<table>'+header+'</table>');
