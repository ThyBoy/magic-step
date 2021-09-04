import React from'react';
class Home extends React.Component{
render(){
    return (
    
        <div class="col-12 col-md-4 col-lg-4 mb-3">
            <div class="card shadow-lg  mb-5 bg-white card-border">
                <img src="./img/coverpic.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div class="row card-avatar">
                        <div class="col">
                            <img class="img-thumbnail" width="70" src="./img/Rectangle.jpg" alt="logo"/>
                        </div>
                        <div class="col mt-3">
                            <h5 class="card-title mt-4"> <i class="fas fa-star fa-color-5"></i> 4.1</h5>
                            <p class="card-title">(17 ratings) </p>
                        </div>
                    </div>
                    <h4 class="card-text">LifeStyle Fashion</h4>
                    <p class="para-size">CP,New Delhi</p>
                    <div class="row" >
                      <div class="col-4 colum-space-first"><p class = "prod-card"><i class="fas fa-shopping-bag fa-common"></i>56 products</p></div>
                          <div class="col-4 colum-space"><p class = "prod-card"><i class="fas fa-search fa-common"></i>500+daily visits</p></div>
                          <div class="col-4 colum-space"> <p class = "prod-card"><i class="far fa-handshake fa-common"></i>50+daily sale</p> </div>
                            
                       </div>
                </div>
              </div>
              
        </div> 
    
);
}

}
export default Home;
