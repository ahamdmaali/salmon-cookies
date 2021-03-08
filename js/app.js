'use srtict';

let main= document.getElementById('salmon');
let i=0;
let header='';
let workinghours=['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalarr=[];

for (let r=0;r<1;r++){
   
    header+='<tr>';
    for (let c=0;c<14;c++){
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

console.log(totalarr);

for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<14;c++){
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
console.log(totalarr);
for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<14;c++){
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
    for (let c=0;c<14;c++){
        header+= '<td>'+darr[c]+'</td>'
    }
    header+='</tr>';

}


let paris=new Cookies(20,38,2.3);
let c=0
let parr='';
while ( c < 14) {
    parr=['Paris ',paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale(),paris.sale()];
    c++
};
for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<14;c++){
        header+= '<td>'+parr[c]+'</td>'
    }
    header+='</tr>';

}


let lima=new Cookies(2,16,4.6);
let d=0
let larr='';
while ( d< 14) {

    larr=['Lima ',lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale(),lima.sale()];
    d++
};
for (let r=0;r<1;r++){
    header+='<tr>';
    for (let c=0;c<14;c++){
        header+= '<td>'+larr[c]+'</td>'
    }
    header+='</tr>';

}

document.write('<table>'+header+'</table>');
