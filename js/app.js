'use srtict';


let workinghours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

    let table= document.getElementById('table');
    let tablehaed= document.createElement('th');
    
    let tablerow= document.createElement('tr');
    table.appendChild(tablehaed)
    tablehaed.appendChild(tablerow);
    let tabledata= document.createElement('td');
    tablehaed.appendChild(tabledata)
    
    for(let i=0; i<16;i++){
    tabledata=document.createElement('td')
    tabledata.textContent= workinghours[i];
    tablehaed.appendChild(tabledata);
   
}

tabledata.textContent='Daily lacation total';



function Cookies(location,mincust,maxcust,avgcookiessale){
    this.location=location;
    this.mincust=mincust;
    this.maxcust=maxcust;
    this.avgcookiessale=avgcookiessale;
    this.sale=function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (this.maxcust*this.avgcookiessale - this.mincust*this.avgcookiessale) + this.mincust*this.avgcookiessale); 
            }
}
function Table(location,array,total){
    this.location=location;
    this.array=array
    this.total=total
    let row= document.createElement('tr');
    tablehaed.appendChild(row);
    let data= document.createElement('td');
    row.appendChild(data)
    data.textContent=location;

for(let i=0; i<16;i++){
    data=document.createElement('td')
    data.textContent= array[i];
    row.appendChild(data);
   
}

data.textContent=total;
}
let seattle= new Cookies('seattle',23,65,6.3);

let seattlecookies=[];
let seattlesum=0;
let totalseatle=0;

for( let i=0; i<14;i++) {
    seattlecookies.push(seattle.sale())
    totalseatle+=seattlecookies[i]

};

let seattlerow= new Table('Seattle',seattlecookies,totalseatle);

let tokyo= new Cookies('Tokyo',3,24,1.2);
let tokyocokies=[];
let totaltokyo=0;
for ( let i=0;i<14;i++) {
    tokyocokies.push(tokyo.sale())
    totaltokyo+=tokyocokies[i];
};
let tokyorow= new Table('Tokyo',tokyocokies,totaltokyo);

let dubai= new Cookies('Dubai',11,38,3.7);
let dubaicookies=[];
let totaldubai=0;
for ( let i=0;i<14;i++) {
    dubaicookies.push(dubai.sale())
    totaldubai+=dubaicookies[i];
};
let dubairow= new Table('Dubai',dubaicookies,totaldubai);

let paris=new Cookies('Paris',20,38,2.3);
let pariscookies=[];
let totalparis=0;
for ( let i=0;i<14;i++) {
    pariscookies.push(paris.sale())
    totalparis+=pariscookies[i];
};
let Parisrow= new Table('Paris',pariscookies,totalparis);


let lima=new Cookies('Lima',2,16,4.6);
let limacookies=[];
let totallima=0;
for ( let i=0;i<14;i++) {
    limacookies.push(lima.sale())
    totallima+=limacookies[i];
};
let limarow= new Table('Lima',limacookies,totallima);



let row='';
function Footer(location,array,total){
    this.location=location;
    this.array=array
    this.total=total
    let row= document.createElement('tr');
    tablehaed.appendChild(row);
    let data= document.createElement('td');
    row.appendChild(data)
    data.textContent=location;

for(let i=0; i<16;i++){
    data=document.createElement('td')
    data.textContent= array[i];
    row.appendChild(data);
   
}

data.textContent=total;
}


let totalhours=[];
let totaltotal=0;
for (let i=0;i<14;i++){
    let total=parseInt([seattlecookies[i]+tokyocokies[i]+dubaicookies[i]+pariscookies[i]+limacookies[i]]);
    totalhours.push(total);
    totaltotal+=total;

}
let totalrow= new Footer('Total',totalhours,totaltotal);
   
let form = document.getElementById('salmoncookies')


form.addEventListener('submit', datahandler);
    

function datahandler(event){
    event.preventDefault();
  
    let location= event.target.name.value;
    let avgcookiessale =event.target.avgcookiessale.value;
    let maxcustomers= event.target.maxcustomers.value;
    let mincustomers = event.target.mincustomers.value; 
   if(location==="" || avgcookiessale==="" || maxcustomers==="" || mincustomers===""){
       alert('Please, fill all data');
   }else{
    let newlocation = new Cookies(location,mincustomers,maxcustomers,avgcookiessale);
    let newcookies=[];
    let newtotal=0;
    for ( let i=0;i<14;i++){
      newcookies.push(newlocation.sale());
      newtotal+=newcookies[i];
    }
    // tablehaed.removeChild(totalrow);
    let newrow= new Table(location,newcookies,newtotal);

    

    


    
    let totalhours=[];
let totaltotal=0;
for (let i=0;i<14;i++){
    let total=parseInt([seattlecookies[i]+tokyocokies[i]+dubaicookies[i]+pariscookies[i]+limacookies[i]+newcookies[i]]);
    totalhours.push(total);
    totaltotal+=total;

}
   let totalrow= new Footer('NewTotal',totalhours,totaltotal);
   }
    
}







