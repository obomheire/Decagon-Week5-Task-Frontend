let productElPost=document.getElementById('product-content')

async function fetchnewapi() {
    let response=await fetch('https://decagon-week5-task-a.herokuapp.com/api')
    let data=await response.json()
    let dataArr=data['data']


    dataArr.forEach(val => {
        productElPost.innerHTML+=`<div class="col-sm-3 space" >
        <div class="card">
          <img
            src="${val['images'][0]}"
            class="card-img-top"
            height="350px"
            alt="..."
          />
          <div class="card-body">
            <p class="card-title">Victoria's secret Sun Glasses</p>
            <p class="card-text"><strong>$</strong> 50,000</p>
            <a href="#!" class="btn btn-warning d-grid">Add Cart</a>
            <a href="checkout.html" class="btn btn-success d-grid btn-color"
              >checkout</a
            >
          </div>
        </div>
      </div>`
    });

}

fetchnewapi()