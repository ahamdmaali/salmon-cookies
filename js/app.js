'use srtict';

let main= document.getElementById('salmon');
let ul= document.getElementById('list');
let i=0;

let Seattle={
    mincust:23,
    maxcust:65,
    avgcookiessale:6.3,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return a=Math.floor(Math.random() * (this.maxcust - this.mincust) + this.mincust)*this.avgcookiessale; 
    }
      
}

document.write('<h3>Seattle</h3>');

while ( i <= 14) {
    let arr=[];
    Seattle.sale();
    arr=[Seattle.sale()]
    document.write('<ul>' +Seattle.workinghours[i]+arr+'</ul>');
    i++
};







let Tokyo={
    mincust:3,
    maxcust:24,
    avgcookiessale:1.2,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return a=Math.floor(Math.random() * (this.maxcust - this.mincust) + this.mincust)*this.avgcookiessale; 
    }

}
while ( i <= 14) {
    let tarr=[];
    Tokyo.sale();
    tarr=[Tokyo.sale()]
    document.write('<ul>' +Tokyo.workinghours[i]+tarr+'</ul>');
    i++
};


let Dubai={
    branchname:'dubai',
    mincust:11,
    maxcust:38,
    avgcookiessale:3.7,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return a=Math.floor(Math.random() * (this.maxcust - this.mincust) + this.mincust)*this.avgcookiessale; 
    }

}

while ( i <= 14) {
    let darr=[];
    Tokyo.sale();
    darr=[Dubai.sale()]
    document.write('<ul>' +Dubai.workinghours[i]+darr+'</ul>');
    i++
};

let Paris={
    branchname:'paris',
    mincust:20,
    maxcust:38,
    avgcookiessale:2.3,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return a=Math.floor(Math.random() * (this.maxcust - this.mincust) + this.mincust)*this.avgcookiessale; 
    }

}
while ( i <= 14) {
    let parr=[];
    Paris.sale();
    parr=[Paris.sale()]
    document.write('<ul>' +Paris.workinghours[i]+parr+'</ul>');
    i++
};


let Lima={
    branchname:'lima',
    mincust:2,
    maxcust:16,
    avgcookiessale:4.6,
    workinghours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
    sale:function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return a=Math.floor(Math.random() * (this.maxcust - this.mincust) + this.mincust)*this.avgcookiessale; 
    }

}
while ( i <= 14) {
    let larr=[];
    Lima.sale();
    parr=[Lima.sale()]
    document.write('<ul>' +Lima.workinghours[i]+larr+'</ul>');
    i++
};

