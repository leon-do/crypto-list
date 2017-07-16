
window.onload = function() {

    let html = '';
    for (let key in coins){

        html = html +
        `
        <div class="col s12 m4 l4">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${coins[key].name}</span>
              <p>${coins[key].summary}</p>
            </div>
            <div class="card-action">
              <div>${coins[key].short}</div>
            </div>
          </div>
        </div>

        `

    }

    document.getElementById("cardDiv").innerHTML = html

}
