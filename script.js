const users=
` <tr>
<td> abood </td>
<td> 29 </td>
<td> 0788334765 </td>
</tr>`;

const userss=[
    ['hala', 27,'078'],
    ['rakan', 30,'079'],
    ['raed', 50,'0787'],
    ['issa', 40,'077'],
]

const tbody=document.getElementById('tbody');
     const fillda=document.getElementById('btn1');

     fillda.addEventListener('click',function test(){
    // tbody.innerHTML=users
    fii()
     })



  function fii(){
    //trs: <tr> String for table
    let trs=''
    for(let tr of userss){
       
        trs +=`<tr>`+ind(tr) + `</tr>`
    }
    tbody.innerHTML=trs
  }   
function ind(tr){
  //trs: <tr> String for table
  let tds=''
  for(let td of tr){
     
      tds +=`<td>`+td + `</td>`
  }
  return tds;
}






