import React from "react";
import "../src/Home.css";
import Product from "../src/Product";
function Home() {
  return (
    <div classname="home">
      <div className="home_container">
        <div class="home_image"></div>
        <div class="home__row">
          <Product  title='the lean startup' price={29.99} rating={5}/>
          <Product  title='the lean startup' price={29.99} rating={5}/>          
        </div>
        <div class="home__row">
          <Product  title='the lean startup' price={29.99} rating={5}/>
          <Product  title='the lean startup' price={29.99} rating={5}/>
          <Product  title='the lean startup' price={29.99} rating={5}/>
        </div>
        <div class="home__row">
          <Product  title='the lean startup' price={29.99} rating={5}/>
        </div>
      </div>
    </div>
  );
}
export default Home;