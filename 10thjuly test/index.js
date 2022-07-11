let h3 = document.getElementsByClassName("hh");
let div = document.getElementById("c1");
let btn = document.getElementById("btn");

let getData = async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  let response = await fetch(url);
  let data = await response.json();
  show(data);
};

let show = (data) => {
  div.innerHTML = ` <div id="c1" class="container">
  <div class="row">
    <div class="col">
      <h3 class="hh">${data[0].name}</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h3 class="hh">${data[0].email}</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h3 class="hh">${data[0].address.city}</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h3 class="hh">${data[0].website}</h3>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <button onclick="fetchBtn()" id="btn">Fetch Data</button>
    </div>
  </div>
</div>`;
};
