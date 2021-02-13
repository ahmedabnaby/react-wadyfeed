import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import video from "../src/videos/06_A'laf.mp4"
class App extends React.Component {
render(){
  return(
    <div>
   
   <>
  <div className="preloader">
    <img src="assets/images/xx.gif" alt />
  </div>{/* /.preloader */}
  <div className="page-wrapper">
    <div className="site_header__header_three_wrap">
      <div className="container-box">
        <div className="topbar_three_content clearfix">
          <div className="topbar_three_nav_box float-left">
            <nav className="header-navigation stricky clearfix">
              <div className="mobile_menu_icon_three">
                <a href="#" className="side-menu__toggler">
                  <i className="fa fa-bars" />
                </a>
              </div>
              <div className="main-nav__main-navigation three float-left">
                <ul className="main-nav__navigation-box">
                  <li>
                    <a href="#home">الرئيسية</a>
                  </li>
                  <li>
                    <a href="#products">منتجاتنا</a>
                  </li>
                  <li>
                    <a href="#nady">برنامج نادي الثمانية</a>
                  </li>
                  <li>
                    <a href="#contact">تواصل معنا</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* Banner Section */}
    <section className="banner-section banner-three" style={{width:'100%',backgroundImage: 'url(assets/images/wady/textured-bg.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} id="home">
      


    <Carousel showStatus={false} showThumbs={false} renderIndicator={(clickHandler, isSelected,i) =>
                (
                <div className="caro_indicators">
                    {i===1&& (
                        <div>
                           
                    <button style={{border:'none', backgroundColor:'transparent',width:"310px", cursor:'pointer'}} className="indi_pos1" onClick={clickHandler}>
                        <img src="assets/images/wady/1.png"  onClick={clickHandler}  role="..."/>
                    </button>                            
                    
                    </div>
                     )}

                    {i===2&& (
                        <div>
                            
                    <button style={{border:'none', backgroundColor:'transparent',width:"310px", cursor:'pointer'}} className="indi_pos2" onClick={clickHandler}>
                        <img src="assets/images/wady/2.png"  onClick={clickHandler}  role="..."/>
                    </button>                            
                    
                    </div>
                     )}
                     {i===3&& (
                        <div>
                            
                    <button style={{border:'none', backgroundColor:'transparent',width:"310px", cursor:'pointer'}} className="indi_pos3" onClick={clickHandler}>
                        <img src="assets/images/wady/3.png"  onClick={clickHandler}  role="..."/>
                    </button>                            
                    
                    </div>
                     )}
                     
                    </div>
                )
            }>     
                <div>
              <video autoPlay loop muted id="myVideo">
                <source src={video} type="video/mp4" />
              </video>
                  <div className="auto-container">
                    <div className="content-box">
                      <div className="content">
                        <div className="inner">
                          <div className="rectangle">
                            <img src="assets/images/wady/WADI dark logo.png" className="logox" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                    <div>
                    <img src="assets/images/wady/pillar3.png" style={{marginTop:"-55px"}}  role="..."/>
                    </div>

                   <div>
                    <img src="assets/images/wady/pillar1.png" style={{marginTop:"-55px"}} role="..."/>
                    </div>

                    <div>
                    <img src="assets/images/wady/pillar2.png" style={{marginTop:"-55px"}}  role="..."/>
                    </div>
                </Carousel>



      {/* <div className="banner-carousel-three owl-theme owl-carousel">
        <div className="slide-item">
          <div className="image-layer">
          <video autoPlay muted loop id="myVideo">
            <source src="assets/videos/06_A'laf.mp4" type="video/mp4" />
          </video>

          </div>
          <div className="auto-container">
            <div className="content-box">
              <div className="content">
                <div className="inner">
                  <div className="rectangle">
                    <img src="assets/images/wady/WADI dark logo.png" className="logox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </section>
    {/*End Banner Section */}

    <section>
    <div className="factory_margin">
        <img src="assets/images/wady/factory image+ caption.png" width="100%" />
      </div>
      {/* Slide Item */}
      
      {/* <div className="header_3_images">
        <img src="assets/images/wady/3 part leaf copy.png" className="leaf-width" />
      </div> */}
    </section>

    {/* Banner Section */}
    <section className="recent_project_three" style={{backgroundImage: 'url(assets/images/wady/textured-bg.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="container-fullwidth first_slider_position">
        <section className="eco_friendly">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="eco_friendly_content">
                  <div>
                    <img style={{width: 200, marginTop: 15}} src="assets/images/wady/chicken logo.png" />
                  </div>
                  <div className="eco_friendly_title eco_title">
                    <h2>منتجات أعلاف الدواجن</h2>
                  </div>
                  <div className="leaf" id="products">
                    <img src="assets/images/resources/leaf.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-5 recent_project_three_carousel owl-theme owl-carousel" style={{backgroundColor:'#938173'}}>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="600ms">
            <div className="project_three_image">
              <img src="assets/images/wady/2- Namy (7.350 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %نامي 21</h2>
                <h2 style={{marginTop: '-50px'}}> (من عمر 11 يوم - 21 يوم)</h2>
              </div>
              <div className="project_three_hover_box">
                <p> هتبني جهاز هضمي يقدر يمتص العناصر الغذائية بكفاءة عالية وتحمي القطيع من الأمراض المعوية وتبقى مستعد للمرحلة الأصعب في الدورة </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="900ms">
            <div className="project_three_image">
              <img src="assets/images/wady/3- Nahy (7.300 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %ناهي 19</h2>
                <h2 style={{marginTop: '-50px'}}> (من عمر 25 يوم - حتى يوم البيع)</h2>
              </div>
              <div className="project_three_hover_box">
                <p> مرحلة مهمة جدا وفيها تحديات مرضية كتير، وعلف الوادي الناهي 19% الوحيد اللي بيضمنلك أعلى مقاومة للأمراض والإجهاد الحراري في المرحلة دي وبوصل القطيع بتاعك لأعلى وزن عند أقل عمر
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="300ms">
            <div className="project_three_image">
              <img src="assets/images/wady/1- Bady (7.450 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %بادي 23</h2>
                <h2 style={{marginTop: '-50px'}}> (من عمر 1 يوم - 10 يوم)</h2>
              </div>
              <div className="project_three_hover_box">
                <p> و اللي بيتكون من العناصر الأعلى هضمية , لبداية مثالية , ومكاسب خيالية</p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/5- Bady Nami (6.950 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2> % بادي نامي 21</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/10- Zahbeya(Badi1) (6.550 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> % بادي 20 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/12- Zahbeya(Nami1) (5.950 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %نامي 15</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/13- Zahbeya(Tahderi) (5.975 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> % تحضيري 14 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/11- Zahbeya(Badi2) (6.200 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %بادي2 16 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/14- Zahbeya2(Bayad1) (6.200 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> % إنتاجي 19</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/15- Zahbeya2(Bayad3) (6.050 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> % إنتاجي 18</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/16- Zahbeya2(Bayad5) (5.900 L.E) Per Ton.jpg" alt />
              <div className="project_three_content">
                <h2> %إنتاجي 17 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/17- Zahbeya2(Bayad7) (5.750 L.E) Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %إنتاجي 16 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/9- Kamla(Intag) (10.000 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2>  مركز مرحلة التربية للدجاج <br />% البياض 33</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/8- Kamla(Tarbeya) (10.200 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2>  مركز مرحلة الإنتاج للدجاج<br />% البياض 30.5</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/6- Al Asly 15 (5.650 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %بياض إنتاجي 15</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/7- Al Asly 16 (5.750 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %بياض إنتاجي 16</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/4- Super Balady (6.500 L.E)Per Ton.png" alt />
              <div className="project_three_content">
                <h2> %سوبر بلدي 21</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fullwidth second_slider_position">
        <section className="eco_friendly">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="eco_friendly_content">
                  <div>
                    <img style={{width: 200, marginTop: 15}} src="assets/images/wady/cow logo.png" />
                  </div>
                  <div className="eco_friendly_title eco_title">
                    <h2>منتجات أعلاف الماشية</h2>
                  </div>
                  <div className="leaf" id="products">
                    <img src="assets/images/resources/leaf.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-5 recent_project_three_carousel second_slider_height owl-theme owl-carousel" style={{backgroundColor:'#938173'}}>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image img_padding">
              <img src="assets/images/wady/Super Corn.png" alt />
              <div className="project_three_content">
                <h2> مخلوط سوبر سيلاج ذرة </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="600ms">
            <div className="project_three_image img_padding">
              <img src="assets/images/wady/TMR Sheep.png" alt />
              <div className="project_three_content">
                <h2> خلطة أعلاف أغنام متكاملة</h2>
              </div>
              <div className="project_three_hover_box">
                <p> هتبني جهاز هضمي يقدر يمتص العناصر الغذائية بكفاءة عالية وتحمي القطيع من الأمراض المعوية وتبقى مستعد للمرحلة الأصعب في الدورة </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="900ms">
            <div className="project_three_image img_padding">
              <img src="assets/images/wady/TMR Fattening.png" alt />
              <div className="project_three_content">
                <h2> خلطة تسمين ماشية متكاملة</h2>
              </div>
              <div className="project_three_hover_box">
                <p> مرحلة مهمة جدا وفيها تحديات مرضية كتير، وعلف الوادي الناهي 19% الوحيد اللي بيضمنلك أعلى مقاومة للأمراض والإجهاد الحراري في المرحلة دي وبوصل القطيع بتاعك لأعلى وزن عند أقل عمر
                </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="300ms">
            <div className="project_three_image img_padding">
              <img src="assets/images/wady/TMR Milking.png" alt />
              <div className="project_three_content">
                <h2> خلطة حلاب ماشية عالي الادرار</h2>
              </div>
              <div className="project_three_hover_box">
                <p> و اللي بيتكون من العناصر الأعلى هضمية , لبداية مثالية , ومكاسب خيالية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fullwidth" id="nady">
      <section className="eco_friendly">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="eco_friendly_content">
                <img style={{width: '30%'}} src="assets/images/wady/club 8 logo.png" />
                <div className="eco_friendly_title">
                  <h2>برنامج نادي الثمانية</h2>
                </div>
                <div className="mt-5 leaf" id="products">
                  <img src="assets/images/resources/leaf.png" alt />
                </div>
                <p style={{fontSize: 25, color: 'white', marginTop: 25}}>برنامج نادي الثمانية هي الطريقة لاعلاف الوادي بتتواصل بيها مع العملاء بتوعها من التجار و المربين  البرنامج ده بيتحمل من على جوجل العملاء يقدرو  عن طريقه يتأكدو ان المنتج المعاهم أصلي مش مضروب , كمان يقدرو يوصلوا  صوتهم و اقتراحتهم للشركة في نفس الوقت يقدروا يشتركوا في   برنامج حوافز اعلاف الوادي و يكسبوا هدايا و  حوافز كتيرة من الشركة</p>
                <div className="mt-5 row">
                  <div className="col">
                    <img src="assets/images/wady/NEW CLUB 8 PNG 3.png" width="65%" />
                    <h4 style={{color: 'white', marginTop: 25}}>عايز  توصل صوتك للشركة</h4>
                  </div>
                  <div className="col">
                    <img src="assets/images/wady/NEW CLUB 8 PNG 2.png" width="65%" />
                    <h4 style={{color: 'white', marginTop: 25}}>عايز تكسب حوافز</h4>
                  </div>
                  <div className="col">
                    <img src="assets/images/wady/NEW CLUB 8 PNG 4.png" width="65%" />
                    <h4 style={{color: 'white', marginTop: 25}}>عايز تكسب هدايا</h4>
                  </div>
                  <div className="col">
                    <img src="assets/images/wady/NEW CLUB 8 PNG 1.png" width="65%" />
                    <h4 style={{color: 'white', marginTop: 25}}>عايز تتأكد ان الشيكارة أصلية</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="container-fullwidth">
      <div style={{backgroundImage: 'url(assets/images/wady/textured-bg.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div>
          <img src="assets/images/wady/curved arrow.png" className="arrowz" />
        </div>
        <div className="eshterek">
          <h3 style={{textAlign: 'right'}}>يبقى اشترك معنا في نادي <br /> !الثمانية</h3>
          <h3 style={{textAlign: 'right'}} className="edkhol">ادخل و نزل البرنامج</h3>
        </div>
        <div>
          <img src="assets/images/wady/club 8- phone mock.png" width="50%" className="phone-mock" />
          <img src="assets/images/wady/QR Code- WADI.png" width="20%" />
        </div>
      </div>
    </div>
    <footer className="site-footer">
      <div className="site-footer_farm_image"><img src="assets/images/resources/site-footer-farm.png" alt="Farm Image" /></div>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-xl-12">
            <div className="eco_friendly_content">
              <img style={{width: 200}} src="assets/images/wady/contact us logo.png" />
              <div className="eco_friendly_title">
                <h2>تواصل معنا</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="container" id="contact">
                          
                          </div> */}
        <div className="row">
          <div className="col" style={{marginLeft: '-455px'}}>
            <div className="eco_friendly_content">
              <div className="eco_friendly_title">
                <p style={{fontSize: 30, color: 'white', textAlign: 'right'}}>  هل لديك أي اسئلة؟<br /> <br /> 19528 تواصل معنا على الخط الساخن </p>
              </div>
            </div>
          </div>
          <div className="col" style={{marginLeft: '-155px'}}>
            <div className="eco_friendly_content">
              <div className="eco_friendly_title">
                <p style={{fontSize: 30, color: 'white', marginTop: 25, textAlign: 'right'}}> :  العنوان </p>
                <p style={{fontSize: 20, color: 'white', marginTop: 25, textAlign: 'right'}}>    مصنع أعلاف الوادي بالسادات  <a href="#" className="etegahat">أحصل على الاتجاهات</a></p>
                <p style={{fontSize: 20, color: 'white', marginTop: 25, textAlign: 'right'}}>     مصنع أعلاف الوادي بالنوبارية  <a href="#" className="etegahat">أحصل على الاتجاهات</a>  </p>
                <p style={{fontSize: 20, color: 'white', marginTop: 25, textAlign: 'right'}}>    مصنع أعلاف الوادي بالقاهرة  <a href="#" className="etegahat">أحصل على الاتجاهات</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="site-footer_bottom">
      <div className="container">
        <div className="site-footer_bottom_copyright">
          {/* <p>@ All copyright 2020, <a href="#">Layerdrops.com</a></p> */}
        </div>
        <div className="site-footer_bottom_menu">
          <ul className="list-unstyled">
            {/* <li><a href="#">Privacy Policy</a></li> */}
            {/* <li><a href="#">Terms of Use</a></li> */}
          </ul>
        </div>
      </div>
    </div>
  </div>{/* /.page-wrapper */}
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up" /></a>
  <div className="side-menu__block">
    <div className="side-menu__block-overlay custom-cursor__overlay">
      <div className="cursor" />
      <div className="cursor-follower" />
    </div>{/* /.side-menu__block-overlay */}
    <div className="side-menu__block-inner ">
      <div className="side-menu__top justify-content-end">
        <a href="#" className="side-menu__toggler side-menu__close-btn"><img src="assets/images/shapes/close-1-1.png" alt /></a>
      </div>{/* /.side-menu__top */}
      <nav className="mobile-nav__container">
        {/* content is loading via js */}
      </nav>
      <div className="side-menu__sep" />{/* /.side-menu__sep */}
      <div className="side-menu__content">
        <p><a href="mailto:sales@wadifeed.com">sales@wadifeed.com</a> <br /> <a href="tel:19528">19528</a></p>
        <div className="side-menu__social">
          <a href="#"><i className="fab fa-facebook-square" /></a>
        </div>
      </div>{/* /.side-menu__content */}
    </div>{/* /.side-menu__block-inner */}
  </div>{/* /.side-menu__block */}
</>

    </div>
  );

}
}
export default App;
