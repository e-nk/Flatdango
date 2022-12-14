const ticketsAvailable = document.querySelector=("available")

const link= 'http://localhost:3000/films'
fetch(link).then((data)=>{
    //console.log(data)
    return data.json();
}).then((completeddata)=>{
    //console.log(completeddata[1].title);
    let data1="";  
    let data2=""; 
    completeddata.map((values)=>{
        data1=`<div class="col-4">
        <h4>Movie list and available tickets</h4>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[0].title}
            <span class="badge bg-primary rounded-pill">3</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[1].title}
            <span class="badge bg-primary rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[2].title}
            <span class="badge bg-primary rounded-pill">19</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[3].title}
            <span class="badge bg-primary rounded-pill">9</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[4].title}
            <span class="badge bg-primary rounded-pill">5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[5].title}
            <span class="badge bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[6].title}
            <span class="badge bg-primary rounded-pill">8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[7].title}
            <span class="badge bg-primary rounded-pill">8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[8].title}
            <span class="badge bg-primary rounded-pill">8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[9].title}
            <span class="badge bg-primary rounded-pill">6</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[10].title}
            <span class="badge bg-primary rounded-pill">8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[11].title}
            <span class="badge bg-primary rounded-pill">10</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[12].title}
            <span class="badge bg-primary rounded-pill">9</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[13].title}
            <span class="badge bg-primary rounded-pill">10</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${completeddata[14].title}
            <span class="badge bg-primary rounded-pill">17</span>
          </li>
        </ul>

        
        <br><br>
      </div>
      <div class="col-4">
      <img src=${values.poster} height="200px" width="200px">
        <h5>${values.title}</h5>
        <p>Runtime: ${values.runtime}</p>
        <p>Showtime: ${values.showtime}</p>
        <p>Tickets sold: ${values.tickets_sold}</p>
        <p class="available">Tickets Available: 3 ${ticketsAvailable}</p>
        
        <a href="#" class="btn btn-success">$ Buy Tickets</a>

      </div>

      `
    });
    document.getElementById("cards").innerHTML=data1
    displayCard.map((values)=>{
      data2=`
      `
    }) 




    const purchaseTicket= (values) => {
      if (!(values.tickets_sold> values.capacity)&& (values.capacity - values.tickets_sold)>=1){
        values.tickets_sold +=1;
        ticketsAvailable.innerHTML=values.capacity - values.tickets_sold;
      }else{
        ticketsAvailable.innerHTML=': The theater is already full'
      }
    }


   

}).catch((error)=>{
    console.log(error);
});
