'use srtict';

let main= document.getElementById('salmon');

let i=0;

let Seattle={
    mincust:23,
    maxcust:65,
    avgcookiessale:6.3,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:',],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.maxcust*this.avgcookiessale - this.mincust*this.avgcookiessale) + this.mincust*this.avgcookiessale); 
    }
      
}

document.write('<h3>Seattle</h3>');

while ( i < 14) {
    let arr=[];
    Seattle.sale();
    arr=[Seattle.sale()]
    document.write('<ul>' +Seattle.workinghours[i]+arr+' cookies.'+'</ul>');

    i++
};



document.write('<h3>Tokyo</h3>');


let Tokyo={
    mincust:3,
    maxcust:24,
    avgcookiessale:1.2,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.maxcust*this.avgcookiessale - this.mincust*this.avgcookiessale) + this.mincust*this.avgcookiessale); 
    }

}
let a=0;
while ( a< 14) {
    let tarr=[];
    Tokyo.sale();
    tarr=[Tokyo.sale()]
    document.write('<ul>' +Tokyo.workinghours[a]+tarr+' cookies.'+'</ul>');
    a++
};

document.write('<h3>Dubai</h3>');

let Dubai={
    branchname:'dubai',
    mincust:11,
    maxcust:38,
    avgcookiessale:3.7,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.maxcust*this.avgcookiessale- this.mincust*this.avgcookiessale) + this.mincust*this.avgcookiessale); 
    }

}
let b=0
while ( b < 14) {
    let darr=[];
    Tokyo.sale();
    darr=[Dubai.sale()]
    document.write('<ul>' +Dubai.workinghours[b]+darr+' cookies.'+'</ul>');

    b++
};


document.write('<h3>Paris</h3>');
let Paris={
    branchname:'paris',
    mincust:20,
    maxcust:38,
    avgcookiessale:2.3,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.maxcust*this.avgcookiessale - this.mincust*this.avgcookiessale) + this.mincust*this.avgcookiessale); 
    }

}
let c=0
while ( c < 14) {
    let parr=[];
    Paris.sale();
    parr=[Paris.sale()]
    document.write('<ul>' +Paris.workinghours[c]+parr+' cookies.'+'</ul>');
    console.log(Paris.workinghours[i]);
    c++
};


document.write('<h3>Lima</h3>');

let Lima={
    branchname:'lima',
    mincust:2,
    maxcust:16,
    avgcookiessale:4.6,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (this.maxcust*this.avgcookiessale - this.mincust*this.avgcookiessale) + this.mincust*this.avgcookiessale); 
    }

}
let d=0
while ( d< 14) {
    let larr=[];
    Lima.sale();
    larr=[Lima.sale()]
    document.write('<ul>' +Lima.workinghours[d]+larr+' cookies.'+'</ul>');
    d++
};

