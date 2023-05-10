import "./Home.css";
import Product from "./Product";

function Home() {
   return (
      <div className="home">
         <div className="home__container">
            <img
               className="home__image"
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
               alt=""
            />
            <div className="home__row">
               <Product
                  //
                  id="323432"
                  title="Samsung Galaxy Tab S8 27.94 cm (11 inch) Display, RAM 8 GB, ROM 128 GB Expandable, SPen in-Box, Wi-Fi Tablet, Silver"
                  price={56 + `,` + 999}
                  image="https://img2.gadgetsnow.com/gd/images/products/additional/large/G347026_View_1/mobiles/tablets/samsung-galaxy-tab-s8-11-inches-wi-fi-tablet-graphite-128gb-8gb-ram-.jpg"
                  rating={4}
               />
               <Product
                  // https://www.amazon.in/Samsung-Graphite-Storage-Additional-Exchange/dp/B0B8SP358P/ref=sr_1_1?crid=JHL5PGOXLSL6&keywords=samsung+z+flip&qid=1683715219&sprefix=samsung+z+filp%2Cspecialty-aps%2C260&sr=8-1
                  id='653224'
                  title="Samsung Galaxy Z Flip4 5G (Graphite, 8GB RAM, 256GB Storage)"
                  price={94 + `,` + 999}
                  image="https://m.media-amazon.com/images/I/61O70Uca38L._SX569_.jpg"
                  rating={4}
               />
            </div>
            <div className="home__row">
               <Product
                  // https://www.greensoul.online/products/raptor-racing-edition-gaming-chair?variant=40416101138492&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjwge2iBhBBEiwAfXDBR0t1lqZAu1mLFXV0STkzW0whbJ7TWn9HGCZLpKdPQMM5-69MycIMLhoCI7YQAvD_BwE
                  id='842462'
                  title="Green Soul Raptor Racing Edition Gaming Chair"
                  price={13 + `,` + 290}
                  image="https://cdn.shopify.com/s/files/1/2108/6923/products/46.png?v=1664448994&width=180"
                  rating={4}
               />
               <Product
                  //https://www.amazon.in/Lenovo-M200-WW-GX30P93886-Mouse-Black/dp/B076GZ3CFC/ref=sr_1_13?keywords=gaming%2Bmouse&qid=1683715581&sr=8-13&th=1
                  id='342341'
                  title="Lenovo Legion M200 RGB Gaming Wired USB Mouse, Ambidextrous, 5-Buttons"
                  price={799}
                  image="https://m.media-amazon.com/images/I/41lHjIo2eYL._SX300_SY300_QL70_FMwebp_.jpg"
                  rating={4}
               />
               <Product
                  // https://www.amazon.in/Redragon-K617-Keyboard-Mechanical-Supported/dp/B09BVCVTBC/ref=sr_1_3?crid=3TFN9WRM5L6WR&keywords=gaming%2BkeyboaRD&qid=1683715874&s=computers&sprefix=gaming%2Bkeyboard%2Ccomputers%2C278&sr=1-3&th=1
                  id='129422'
                  title="Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keycaps"
                  price={2 + `,` + 649}
                  image="https://m.media-amazon.com/images/I/610P9MPegbL._SY355_.jpg"
                  rating={4}
               />
            </div>
            <div className="home__row">
               <Product
                  // https://www.amazon.in/LG-Monitor-Calibrated-Premium-Speaker/dp/B09P1Y77M6/ref=sr_1_3?crid=1SI7HKZCJJX46&keywords=wide+screen+curved+monitor&qid=1683715995&s=computers&sprefix=wide+screen+curved+monitor%2Ccomputers%2C248&sr=1-3
                  id='401343'
                  title="LG 86cm Ultra Wide Curved Gaming LCD Monitor 160Hz 1ms -QHD (2K 3440 x 1440 Pixels) sRGB HDR 10 Color Calibrated, Free Sync Premium, HDM1, 2 DP, 7W Speaker, Tilt & Height Adjust - 34WP65C Black"
                  price={40 + `,` + 600}
                  image="https://m.media-amazon.com/images/I/61Y0JHgpWJL._SY450_.jpg"
                  rating={4}
               />
            </div>
         </div>
      </div>
   );
}
export default Home;



