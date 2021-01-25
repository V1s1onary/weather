import React from 'react';
 import ReactDOM from 'react-dom';
 import './weather.css';


// this function is adds card (in future which card you add,will save in LOCAL STORAGE)
// but i need more time to improve this function, cause earlier i haven't know about LocalStorage and React too.
function Add_card(id,id2,id3)
{
  document.getElementById(id).style.marginLeft='80%';
  document.getElementById(id).style.width='40%'
  //document.getElementById(id).style.position='relative'
   document.getElementById(id2).style.display= 'none';
   document.getElementById(id3).style.display='inline';

}
// That function delete cards which you added earlier
function delete_card(id,id2,id3)
{
   document.getElementById(id).style.marginLeft='';
   document.getElementById(id).style.width=''
   document.getElementById(id2).style.display='inline';
   document.getElementById(id3).style.display='none'

}

// renewals data weather 
function button_preKh(town,id1,id2,id3,id4,id5,id6)
{
  
 
 countryName(town,id1)
 countryTemp(town,id2)
 countryWeather(town,id3)
 countryWind(town,id4)
  countryFeelsLike(town,id5)
  countryId(town,id6)
}

// when cursor is on the card you can see all info about weather in this city
function all_info(id1,id2,id3)
{
	
   document.getElementById(id1).style.display='inline';
   document.getElementById(id2).style.display='inline';
  document.getElementById(id3).style.display='inline';
  
  
}
// when cursor is out card's space all info is vanishes 
function not_all_info(id1,id2,id3)
{
   document.getElementById(id1).style.display='none';
   document.getElementById(id2).style.display='none';
  document.getElementById(id3).style.display='none';

}

// get data about weather in the city

function countryWeather(town,idd)
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9c24a3b94dc3538e1404d7ca66039d3&lang=ru`)
.then(function(resp) { return resp.json() })
.then(function(data) {
   
   let weath=`${data.weather[0].description} `;
   document.getElementById(`${idd}`).innerHTML=weath;


});

}
// get data about temperature in the city
function countryTemp (town,idd)
{
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9c24a3b94dc3538e1404d7ca66039d3&lang=ru`)
.then(function(resp) { return resp.json() })
.then(function(data) {

  	let temp=`Температура: ${Math.round(data.main.temp-273)} &deg; `
  document.getElementById(`${idd}`).innerHTML=temp;
});
}

// get data about how feels in street in the city
function countryFeelsLike (town,idd)
{
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9c24a3b94dc3538e1404d7ca66039d3&lang=ru`)
.then(function(resp) { return resp.json() })
.then(function(data) {

  	let feels=`Ощущаеться как: ${Math.round(data.main.feels_like-273)} &deg;  `
  document.getElementById(`${idd}`).innerHTML=feels;
});
}
// get data about  city's name
function countryName (town,idd)
{
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9c24a3b94dc3538e1404d7ca66039d3&lang=ru`)
.then(function(resp) { return resp.json() })
.then(function(data) {

  	 let  country =` ${data.name} `
  document.getElementById(`${idd}`).innerHTML=country;
});
}
// get data about  city's id
function countryId (town,idd)
{
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9c24a3b94dc3538e1404d7ca66039d3&lang=ru`)
.then(function(resp) { return resp.json() })
.then(function(data) {

  	let id=` Id Города: ${data.sys.id} `
  document.getElementById(`${idd}`).innerHTML=id;
});
}

// get data about wind speed in the city

function countryWind (town,idd)
{
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&appid=b9c24a3b94dc3538e1404d7ca66039d3&lang=ru`)
.then(function(resp) { return resp.json() })
.then(function(data) {

  	let wind=` Ветер: ${data.wind.speed} м/с `
  document.getElementById(`${idd}`).innerHTML=wind;
});
}

 const cards = (
 	<div>
 	<div className='Main_Kh' name='Харьков' id='Main_Kh'>
 	<ul onMouseOver={() => all_info('KharkivId','KharkivWind','Kharkiv_feels')} onMouseOut={() => not_all_info('Kharkiv_feels','KharkivWind','KharkivId')}>
 	<li id='KharkivName' className='KharkivName'>  {countryName('Kharkiv','KharkivName')}  </li>
       <li id='Kharkiv_temp' className='Kharkiv_temp'> {countryTemp('Kharkiv','Kharkiv_temp')} </li>
<li id='KharkivWeather' className='KharkivWeather'>{countryWeather('Kharkiv','KharkivWeather')}</li>
<li id='KharkivWind' className='KharkivWind'>{countryWind('Kharkiv','KharkivWind')}</li>
<li id='Kharkiv_feels' className='Kharkiv_feels'>{countryFeelsLike('Kharkiv','Kharkiv_feels')}</li>
<li id='KharkivId' className='KharkivId'>{countryId('Kharkiv','KharkivId')}</li>
 <button onClick={() => button_preKh('Kharkiv','KharkivName','Kharkiv_temp','KharkivWeather','KharkivWind','Kharkiv_feels','KharkivId')}>Обновить</button>
 <button id='Add_Kh' onClick={() => Add_card('Main_Kh','Add_Kh','Del_Kh')}>ADD</button>
 <button className='Del_Kh' id='Del_Kh' onClick={() => delete_card('Main_Kh','Add_Kh','Del_Kh')}>Delete</button>
</ul>

 	 </div>

 	 <div className='Main_Ln' id='Main_Ln'>
 	<ul onMouseOver={() => all_info('LnId','LnWind','Ln_feels')} onMouseOut={() => not_all_info('Ln_feels','LnWind','LnId')}>
 	<li id='LnName' className='LnName'>  {countryName('London','LnName')}  </li>
       <li id='Ln_temp' className='Ln_temp'> {countryTemp('London','Ln_temp')} </li>
<li id='LnWeather' className='LnWeather'>{countryWeather('London','LnWeather')}</li>
<li id='LnWind' className='LnWind'>{countryWind('London','LnWind')}</li>
<li id='Ln_feels' className='Ln_feels'>{countryFeelsLike('London','Ln_feels')}</li>
<li id='LnId' className='LnId'>{countryId('London','LnId')}</li>
<button onClick={() => button_preKh('London','LnName','Ln_temp','LnWeather','LnWind','Ln_feels','LnId')}>Обновить</button>
<button id='Add_Ln' onClick={() => Add_card('Main_Ln','Add_Ln','Del_Ln')}>ADD</button>
 <button className='Del_Ln' id='Del_Ln' onClick={() => delete_card('Main_Ln','Add_Ln','Del_Ln')}>Delete</button>
</ul>

 	 </div>


<div className='Main_Mc'id='Main_Mc' >
 	<ul onMouseOver={() => all_info('McId','McWind','Mc_feels')} onMouseOut={() => not_all_info('Mc_feels','McWind','McId')}>
 	<li id='McName' className='McName'>  {countryName('Moscow','McName')}  </li>
       <li id='Mc_temp' className='Mc_temp'> {countryTemp('Moscow','Mc_temp')} </li>
<li id='McWeather' className='McWeather'>{countryWeather('Moscow','McWeather')}</li>
<li id='McWind' className='McWind'>{countryWind('Moscow','McWind')}</li>
<li id='Mc_feels' className='Mc_feels'>{countryFeelsLike('Moscow','Mc_feels')}</li>
<li id='McId' className='McId'>{countryId('Moscow','McId')}</li>
<button onClick={() => button_preKh('Moscow','McName','Mc_temp','McWeather','McWind','Mc_feels','McId')}>Обновить</button>
<button id='Add_Mc' onClick={() => Add_card('Main_Mc','Add_Mc','Del_Mc')}>ADD</button>
 <button className='Del_Mc' id='Del_Mc' onClick={() => delete_card('Main_Mc','Add_Mc','Del_Mc')}>Delete</button>
</ul>

 	 </div>




<div className='Main_Br' id='Main_Br' >
 	<ul onMouseOver={() => all_info('BrId','BrWind','Br_feels')} onMouseOut={() => not_all_info('Br_feels','BrWind','BrId')}>
 	<li id='BrName' className='BrName'>  {countryName('Barcelona','BrName')}  </li>
       <li id='Br_temp' className='Br_temp'> {countryTemp('Barcelona','Br_temp')} </li>
<li id='BrWeather' className='BrWeather'>{countryWeather('Barcelona','BrWeather')}</li>
<li id='BrWind' className='BrWind'>{countryWind('Barcelona','BrWind')}</li>
<li id='Br_feels' className='Br_feels'>{countryFeelsLike('Barcelona','Br_feels')}</li>
<li id='BrId' className='BrId'>{countryId('Barcelona','BrId')}</li>
<button onClick={() => button_preKh('Barcelona','BrName','Br_temp','BrWeather','BrWind','Br_feels','BrId')}>Обновить</button>
<button id='Add_Br' onClick={() => Add_card('Main_Br','Add_Br','Del_Br')}>ADD</button>
 <button className='Del_Br' id='Del_Br' onClick={() => delete_card('Main_Br','Add_Br','Del_Br')}>Delete</button>
</ul>

 	 </div>


<div className='Main_Ber' id='Main_Ber' >
 	<ul onMouseOver={() => all_info('BerId','BerWind','Ber_feels')} onMouseOut={() => not_all_info('Ber_feels','BerWind','BerId')}>
 	<li id='BerName' className='BerName'>  {countryName('Berlin','BerName')}  </li>
       <li id='Ber_temp' className='Ber_temp'> {countryTemp('Berlin','Ber_temp')} </li>
<li id='BerWeather' className='BerWeather'>{countryWeather('Berlin','BerWeather')}</li>
<li id='BerWind' className='BerWind'>{countryWind('Berlin','BerWind')}</li>
<li id='Ber_feels' className='Ber_feels'>{countryFeelsLike('Berlin','Ber_feels')}</li>
<li id='BerId' className='BerId'>{countryId('Berlin','BerId')}</li>
<button onClick={() => button_preKh('Berlin','BerName','Ber_temp','BerWeather','BerWind','Ber_feels','BerId')}>Обновить</button>
<button id='Add_Ber' onClick={() => Add_card('Main_Ber','Add_Ber','Del_Ber')}>ADD</button>
 <button className='Del_Ber' id='Del_Ber' onClick={() => delete_card('Main_Ber','Add_Ber','Del_Ber')}>Delete</button>
</ul>

 	 </div>

<div className='Main_Am' id='Main_Am'>
 	<ul onMouseOver={() => all_info('AmId','AmWind','Am_feels')} onMouseOut={() => not_all_info('Am_feels','AmWind','AmId')}>
 	<li id='AmName' className='AmName'>  {countryName('Amsterdam','AmName')}  </li>
       <li id='Am_temp' className='Am_temp'> {countryTemp('Amsterdam','Am_temp')} </li>
<li id='AmWeather' className='AmWeather'>{countryWeather('Amsterdam','AmWeather')}</li>
<li id='AmWind' className='AmWind'>{countryWind('Amsterdam','AmWind')}</li>
<li id='Am_feels' className='Am_feels'>{countryFeelsLike('Amsterdam','Am_feels')}</li>
<li id='AmId' className='AmId'>{countryId('Amsterdam','AmId')}</li>
<button onClick={() => button_preKh('Amsterdam','AmName','Am_temp','AmWeather','AmWind','Am_feels','AmId')}>Обновить</button>
<button id='Add_Am' onClick={() => Add_card('Main_Am','Add_Am','Del_Am')}>ADD</button>
 <button className='Del_Am' id='Del_Am' onClick={() => delete_card('Main_Am','Add_Am','Del_Am')}>Delete</button>
</ul>

 	 </div>

<div className='Main_Db' id='Main_Db'>
 	<ul onMouseOver={() => all_info('DbId','DbWind','Db_feels')} onMouseOut={() => not_all_info('Db_feels','DbWind','DbId')}>
 	<li id='DbName' className='DbName'>  {countryName('Dublin','DbName')}  </li>
       <li id='Db_temp' className='Db_temp'> {countryTemp('Dublin','Db_temp')} </li>
<li id='DbWeather' className='DbWeather'>{countryWeather('Dublin','DbWeather')}</li>
<li id='DbWind' className='DbWind'>{countryWind('Dublin','DbWind')}</li>
<li id='Db_feels' className='Db_feels'>{countryFeelsLike('Dublin','Db_feels')}</li>
<li id='DbId' className='DbId'>{countryId('Dublin','DbId')}</li>
<button onClick={() => button_preKh('Dublin','DbName','Db_temp','DbWeather','DbWind','Db_feels','DbId')}>Обновить</button>
<button id='Add_Db' onClick={() => Add_card('Main_Db','Add_Db','Del_Db')}>ADD</button>
 <button className='Del_Db' id='Del_Db' onClick={() => delete_card('Main_Db','Add_Db','Del_Db')}>Delete</button>
</ul>

 	 </div>

<div className='Main_Rg' id='Main_Rg'>
 	<ul onMouseOver={() => all_info('RgId','RgWind','Rg_feels')} onMouseOut={() => not_all_info('Rg_feels','RgWind','RgId')}>
 	<li id='RgName' className='RgName'>  {countryName('Riga','RgName')}  </li>
       <li id='Rg_temp' className='Rg_temp'> {countryTemp('Riga','Rg_temp')} </li>
<li id='RgWeather' className='RgWeather'>{countryWeather('Riga','RgWeather')}</li>
<li id='RgWind' className='RgWind'>{countryWind('Riga','RgWind')}</li>
<li id='Rg_feels' className='Rg_feels'>{countryFeelsLike('Riga','Rg_feels')}</li>
<li id='RgId' className='RgId'>{countryId('Riga','RgId')}</li>
<button  onClick={() => button_preKh('Riga','RgName','Rg_temp','RgWeather','RgWind','Rg_feels','RgId')}>Обновить</button>
<button id='Add_Rg' onClick={() => Add_card('Main_Rg','Add_Rg','Del_Rg')}>ADD</button>
 <button className='Del_Rg' id='Del_Rg' onClick={() => delete_card('Main_Rg','Add_Rg','Del_Rg')}>Delete</button>
</ul>

 	 </div>
 	 </div>
 	);

 ReactDOM.render(

      cards,
      document.getElementById('root')
    );
