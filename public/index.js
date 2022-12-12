const link= 'http://localhost:3000/films'
fetch(link).then((data)=>{
    //console.log(data)
    return data.json();
}).then((completeddata)=>{
    //console.log(completeddata[1].title);
    let data1="";
    completeddata.map((values)=>{
        data1+=`<div class="card" style="height: 9px;">
        <img src=${values.poster} class="card-img-top" alt="..." style="height: 200px;">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <p class="runtime">${values.runtime}</p>
          <p class="showtime">${values.showtime}</p>
          <p class="tickets_sold">${values.tickets_sold}</p>
          <p class="capacity">${values.capacity}</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>`
    });
    document.getElementById("cards").innerHTML=data1


   

}).catch((error)=>{
    console.log(error);
});