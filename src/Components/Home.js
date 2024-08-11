function Home(){
    return(
        <>
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5" style={{backgroundImage:"url(https://images.pexels.com/photos/1435900/pexels-photo-1435900.jpeg?auto=compress&cs=tinysrgb&w=600)"}}>
        <h1 class="display-5 fw-bold">My Pizza Store</h1>
        <p class="col-md-8 fs-4" style={{color:"black",fontStyle:"-moz-initial"}}>where passion for pizza meets perfection in every slice..</p>
        <button class="btn btn-success rounded-pill px-3" type="button">Learn more</button>      
        </div>
    </div>
           


        <div class="container marketing">

            {/* <!-- Three columns of text below the carousel --> */}
            <div class="row">
            <div class="col-lg-4">
                <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <h2 class="fw-normal">Flat Rs.200 off</h2>
                <p>on order above Rs.500</p>
                <p class="btn btn-secondary" href="#">Use Code ANG07</p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div class="col-lg-4">
                <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <h2 class="fw-normal">Flat Rs.50 off</h2>
                <p>on order above Rs.299</p>
                <p class="btn btn-secondary" href="#">Use Code RIG73</p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div class="col-lg-4">
                <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=600" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <h2 class="fw-normal">Flat Rs.500 off</h2>
                <p>on order above Rs.999</p>
                <p class="btn btn-secondary" href="#">Use Code ARI34</p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            </div>
        </div>
    
        {/* <!-- /.row -->  */}


        {/* <!-- START THE FEATURETTES --> */}

        <hr class="featurette-divider"/>

        <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1"  style={{fontWeight:"bolder"}}>"Sweet Meets Savory... <span class="text-body-secondary">Corn and Pepperoni Pizza Delight...."</span></h2>
            <p class="lead">Savor the unbeatable combination of crisp pepperoni and juicy corn on our one of a kind pizza. Try it today!</p>
            <button class="btn btn-success rounded-pill px-3" type="button">Order Now</button>
        </div>
        <div class="col-md-5">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/25185057/pexels-photo-25185057/free-photo-of-close-up-of-a-slice-of-pizza-with-bacon-and-corn.jpeg?auto=compress&cs=tinysrgb&w=600" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette">
        <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">"Eggs, Bacon, and Pizza— <span class="text-body-secondary">—Oh My!"</span></h2>
            <p class="lead">Why choose between breakfast and pizza when you can have both? Try our Egg and Bacon Pizza today!</p>
            <button class="btn btn-success rounded-pill px-3" type="button">Order Now</button>

        </div>
        <div class="col-md-5 order-md-1">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/5640016/pexels-photo-5640016.jpeg?auto=compress&cs=tinysrgb&w=600" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">"Unleash the Sweetness: <span class="text-body-secondary">Strawberry Pizza Redefined"</span></h2>
            <p class="lead">Get ready for a flavor adventure with our Strawberry Pizza—where every bite is a taste of bliss!</p>
            <button class="btn btn-success rounded-pill px-3" type="button">Order Now</button>

        </div>
        <div class="col-md-5">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://images.pexels.com/photos/17637073/pexels-photo-17637073/free-photo-of-pizza-with-strawberries.png?auto=compress&cs=tinysrgb&w=600" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>

        <hr class="featurette-divider"/>

        {/* <!-- /END THE FEATURETTES --> */}
        </div>
    

        </>
    )
}

export default Home;