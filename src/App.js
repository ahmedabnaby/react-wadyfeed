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
    <img src="assets/images/xx.gif" className="preloader_imgs" />
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
                <a href="#nady" >
                <img className="nady8" src="assets/images/wady/circle club 8 new.png" />
                </a>
                <div className="new_logo">
                    <a href="#"><img src="assets/images/wady/wave_logo.png" className="new_logo_img" role="..."/></a>
                  </div>
              </div>
              
              <div className="main-nav__main-navigation three float-left">
                <ul className="main-nav__navigation-box">
                  <li>
                    <a href="#home">الرئيسية</a>
                  </li>
                  <li>
                    <a href="#nady">برنامج نادي الثمانية</a>
                  </li>
                  <li>
                    <a href="#products">منتجاتنا</a>
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
      


    <Carousel interval={15000} infiniteLoop autoPlay showStatus={false} showThumbs={false} renderIndicator={(clickHandler, isSelected,i) =>
                (
                <div className="caro_indicators wow fadeInLeft" data-wow-delay="50ms">
                    {i===1&& (
                        <div>
                           
                    <button className="indi_pos1" onClick={clickHandler}>
                        <img src="assets/images/wady/1.png"  onClick={clickHandler}  role="..."/>
                    </button>                            
                    
                    </div>
                     )}

                    {i===2&& (
                        <div>
                            
                    <button className="indi_pos2" onClick={clickHandler}>
                        <img src="assets/images/wady/2.png"  onClick={clickHandler}  role="..."/>
                    </button>                            
                    
                    </div>
                     )}
                     {i===3&& (
                        <div>
                            
                    <button className="indi_pos3" onClick={clickHandler}>
                        <img src="assets/images/wady/3.png"  onClick={clickHandler}  role="..."/>
                    </button>                            
                    
                    </div>
                     )}
                     
                    </div>
                )
            }>     
              <div>
              <video autoPlay loop muted className="slider-v" id="myVideo">
                <source src={video} type="video/mp4" />
              </video>
                  </div>
                  <div>
                    <img src="assets/images/wady/Qr-Code-on-Bag-Rotator.png" className="slider-1" style={{marginTop:"-55px"}}  role="..."/>

                    </div>
                    <div>
                    <img src="assets/images/wady/portfolio.jpg" className="slider-2" style={{marginTop:"-55px"}} role="..."/>
                    </div>
                    <div>
                    <img src="assets/images/wady/Available-now-Header.jpg" className="slider-3" style={{marginTop:"-55px"}}  role="..."/>

                    </div>

                    
                   

                  
                </Carousel>
    </section>
    
    <section>
    <div className="factory_margin">
        <img src="assets/images/wady/Scan the Code.jpg" width="100%"/>
      </div>
    </section>
    <div className="container-fullwidth" id="nady">
      <section className="eco_friendly">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="eco_friendly_content">
                <img className="nady_old_logo wow fadeInLUp" data-wow-delay="150ms" src="assets/images/wady/circle club 8 new.png" />
                <div className="eco_friendly_title wow fadeInUp" data-wow-delay="150ms">
                  <h2 className="fontSizeSmaller">برنامج نادي الثمانية</h2>
                </div>
                <div className="mt-5 leaf" id="nady">
                  <img src="assets/images/resources/leaf.png"   />
                </div>
                <p className="fontSizeSmallers" style={{fontSize: 25, color: 'white', marginTop: 25}}>برنامج نادي الثمانية هي الطريقة لاعلاف الوادي بتتواصل بيها مع العملاء بتوعها من التجار و المربين  البرنامج ده بيتحمل من على جوجل العملاء يقدرو  عن طريقه يتأكدو ان المنتج المعاهم أصلي مش مضروب , كمان يقدرو يوصلوا  صوتهم و اقتراحتهم للشركة في نفس الوقت يقدروا يشتركوا في   برنامج حوافز اعلاف الوادي و يكسبوا هدايا و  حوافز كتيرة من الشركة</p>
                <div className="mt-5 row">
                  <div className="col col-width wow fadeInLeft" data-wow-delay="50ms">
                    <img src="assets/images/wady/Money icon.png" className="icon-width" />
                    <h4 style={{color: 'white', marginTop: '40px'}}>عايز  توصل صوتك للشركة</h4>
                  </div>
                  <div className="col col-width wow fadeInLeft" data-wow-delay="150ms">
                    <img src="assets/images/wady/Employees Icon.png" className="icon-width"/>
                    <h4 style={{color: 'white', marginTop:  '40px'}}>عايز تكسب حوافز</h4>
                  </div>
                  <div className="col col-width wow fadeInLeft" data-wow-delay="250ms">
                    <img src="assets/images/wady/Gifts Icon.png" className="icon-width" />
                    <h4 style={{color: 'white', marginTop: '40px'}}>عايز تكسب هدايا</h4>
                  </div>
                  <div className="col col-width wow fadeInLeft" data-wow-delay="350ms">
                    <img src="assets/images/wady/Original Icon.png" className="icon-width" />
                    <h4 style={{color: 'white', marginTop: "40px"}}>عايز تتأكد ان الشيكارة أصلية</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="container-fullwidth">
      <div style={{backgroundImage: 'url(assets/images/wady/closeup3.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div>
          <img src="assets/images/wady/curved arrow.png" className="arrowz" />
        </div>
        <div className="eshterek">
          <h3 style={{textAlign: 'right'}}>يبقى اشترك معنا في نادي <br /> !الثمانية</h3>
        </div>
        <div>
          <img src="assets/images/wady/new mobile mock up.png" className="phone-mock wow fadeInLeft" data-wow-delay="250ms" />
          <img src="assets/images/wady/QR Code- WADI.png" className="qr_img wow fadeInRight" data-wow-delay="250ms" style={{backgroundColor:'white'}} />
          <h3 style={{textAlign: 'right'}} className="edkhol">اسكان الكود و نزل برنامج نادي الثمانية </h3>
        </div>
        
      </div>
    </div>
    {/* Banner Section */}
    <section className="recent_project_three"  id="products" style={{backgroundImage: 'url(assets/images/wady/textured-bg.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="container-fullwidth col-width-products first_slider_position">
      <section className="eco_friendly bggreen" >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="eco_friendly_content">
                <div className="auto-container">
                    <div className="content-box">
                      <div className="content">
                        <div className="inner">
                          <div className="rectangle2">
                            <img src="assets/images/wady/A'laf LAF Logo.png" className="logox" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="eco_friendly_title eco_title" style={{marginTop:'95px'}}>
                    <h2 className="fontSizeSmaller-products">منتجات أعلاف الماشية</h2>
                  </div>
                  <div className="leaf">
                    <img src="assets/images/resources/leaf.png"   />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-5 recent_project_three_carousel second_slider_height owl-theme owl-carousel" style={{backgroundColor:"#29a329"}}>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image img_padding">
              <img src="assets/images/wady/Super Corn.png"   />
              <div className="project_three_content" style={{backgroundColor:'#534839'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> مخلوط سوبر سيلاج ذرة </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="600ms">
            <div className="project_three_image img_padding">
              <img src="assets/images/wady/TMR Sheep.png"   />
              <div className="project_three_content" style={{backgroundColor:'#534839'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> خلطة أعلاف أغنام متكاملة</h2>
              </div>
              <div className="project_three_hover_box">
                <p> هتبني جهاز هضمي يقدر يمتص العناصر الغذائية بكفاءة عالية وتحمي القطيع من الأمراض المعوية وتبقى مستعد للمرحلة الأصعب في الدورة </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="900ms">
            <div className="project_three_image img_padding">
              <img src="assets/images/wady/TMR Fattening.png"   />
              <div className="project_three_content" style={{backgroundColor:'#534839'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> خلطة تسمين ماشية متكاملة</h2>
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
              <img src="assets/images/wady/TMR Milking.png"   />
              <div className="project_three_content" style={{backgroundColor:'#534839'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> خلطة حلاب ماشية عالي الادرار</h2>
              </div>
              <div className="project_three_hover_box">
                <p> و اللي بيتكون من العناصر الأعلى هضمية , لبداية مثالية , ومكاسب خيالية</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="container-fullwidth col-width-products second_slider_position">
      <section className="eco_friendly bgyellow">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="eco_friendly_content">
                <div className="auto-container">
                    <div className="content-box">
                      <div className="content">
                        <div className="inner">
                          <div className="rectangle2">
                            <img src="assets/images/wady/A'laf Poultry logo.png" className="logox" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                  <div className="eco_friendly_title eco_title" style={{marginTop:'95px'}}>
                    <h2 className="fontSizeSmaller-products">منتجات أعلاف الدواجن</h2>
                  </div>
                  <div className="leaf">
                    <img src="assets/images/resources/leaf.png"   />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-5 recent_project_three_carousel owl-theme owl-carousel" style={{backgroundColor:'#ef860d'}}>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="600ms">
            <div className="project_three_image">
              <img src="assets/images/wady/2- Namy (7.350 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %نامي 21</h2>
                <h2 style={{marginTop: '-50px', color:'white', fontFamily:'Bold GE SS'}}> (من عمر 11 يوم - 21 يوم)</h2>
              </div>
              <div className="project_three_hover_box">
                <p> هتبني جهاز هضمي يقدر يمتص العناصر الغذائية بكفاءة عالية وتحمي القطيع من الأمراض المعوية وتبقى مستعد للمرحلة الأصعب في الدورة </p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="850ms">
            <div className="project_three_image">
              <img src="assets/images/wady/3- Nahy (7.300 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %ناهي 19</h2>
                <h2 style={{marginTop: '-50px', color:'white', fontFamily:'Bold GE SS'}}> (من عمر 25 يوم - حتى يوم البيع)</h2>
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
              <img src="assets/images/wady/1- Bady (7.450 L.E) Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %بادي 23</h2>
                <h2 style={{marginTop: '-50px', color:'white', fontFamily:'Bold GE SS'}}> (من عمر 1 يوم - 10 يوم)</h2>
              </div>
              <div className="project_three_hover_box">
                <p> و اللي بيتكون من العناصر الأعلى هضمية , لبداية مثالية , ومكاسب خيالية</p>
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/5- Bady Nami (6.950 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> % بادي نامي 21</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/10- Zahbeya(Badi1) (6.550 L.E) Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> % بادي 20 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/12- Zahbeya(Nami1) (5.950 L.E) Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %نامي 15</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/13- Zahbeya(Tahderi) (5.975 L.E) Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> % تحضيري 14 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/11- Zahbeya(Badi2) (6.200 L.E) Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %بادي2 16 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/14- Zahbeya2(Bayad1) (6.200 L.E) Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> % إنتاجي 19</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/15- Zahbeya2(Bayad3) (6.050 L.E) Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> % إنتاجي 18</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/* <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/16- Zahbeya2(Bayad5) (5.900 L.E) Per Ton.jpg"   />
              <div className="project_three_content">
                <h2> %إنتاجي 17 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/17- Zahbeya2(Bayad7) (5.750 L.E) Per Ton.png"   />
              <div className="project_three_content">
                <h2> %إنتاجي 16 </h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div> */}
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/9- Kamla(Intag) (10.000 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}>  مركز مرحلة التربية للدجاج <br />% البياض 33</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/8- Kamla(Tarbeya) (10.200 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}>  مركز مرحلة الإنتاج للدجاج<br />% البياض 30.5</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/6- Al Asly 15 (5.650 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %بياض إنتاجي 15</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/7- Al Asly 16 (5.750 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %بياض إنتاجي 16</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
          {/*Item*/}
          <div className="project_three_single wow fadeInUp" data-wow-delay="1200ms">
            <div className="project_three_image">
              <img src="assets/images/wady/4- Super Balady (6.500 L.E)Per Ton.png"   />
              <div className="project_three_content" style={{backgroundColor:'#da373e'}}>
                <h2 style={{color:'white', fontFamily:'Bold GE SS'}}> %سوبر بلدي 21</h2>
              </div>
              <div className="project_three_hover_box">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="factory_margin">
        <img src="assets/images/wady/contact.png" width="100%"/>
      </div>
    <footer className="site-footer">
      <div className="site-footer_farm_image"><img src="assets/images/resources/site-footer-farm.png"  alt="Farm Image" /></div>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-xl-12">
            <div className="eco_friendly_content footer_margin footer_edits">
              <img className="contact_us_logo" src="assets/images/wady/contact us logo.png" />
              <div className="eco_friendly_title eco_title">
                <h2 className="fontSizeSmaller">تواصل معنا</h2>
                <a href="https://www.wadigroup.com"><img className="wadyGroup" src="assets/images/wady/wadi.png" role="..." /></a>

              </div>
            </div>
          </div>
        </div>
        {/* <div class="container" id="contact">
                          
                          </div> */}
        <div className="row">
          <div className="col footer_col_margin">
            <div className="eco_friendly_content">
              <div className="eco_friendly_title">
                <p style={{fontSize: 25, color: 'white', textAlign: 'right'}}>  هل لديك أي اسئلة؟<br /> <br /> 19528 تواصل معنا على الخط الساخن </p>
              </div>
            </div>
          </div>
          <div className="col footer_col_margin2">
            <div className="eco_friendly_content">
              <div className="eco_friendly_title">
                <p style={{fontSize: 25, color: 'white', marginTop: 25, textAlign: 'right'}}> :  العنوان </p>
                <p style={{fontSize: 15, color: 'white', marginTop: 25, textAlign: 'right'}}>     مصنع أعلاف الوادي بالنوبارية  <a href="https://maps.app.goo.gl/3nTTXPxBv6eZxw177" className="etegahat">أحصل على الاتجاهات</a>  </p>
                <p style={{fontSize: 15, color: 'white', marginTop: 25, textAlign: 'right'}}>    مصنع أعلاف الوادي بالسادات  <a href="https://www.google.com/maps/place/30%C2%B024'19.5%22N+30%C2%B035'22.0%22E/@30.4054031,30.5872469,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d30.4054031!4d30.5894356?hl=en" className="etegahat1">أحصل على الاتجاهات</a></p>
                <p style={{fontSize: 15, color: 'white', marginTop: 25, textAlign: 'right'}}>     المقر الرئيسي لشركة أعلاف الوادي  <a href="https://www.google.com/maps/place/Wadi+Group/@30.0242481,31.0109596,17z/data=!3m1!4b1!4m5!3m4!1s0x14585a6b823883a1:0x3dd7399112191e2b!8m2!3d30.0242481!4d31.0131483?hl=en-US" className="etegahat2">أحصل على الاتجاهات</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="site-footer_bottom">
      <div className="container">
        <div className="site-footer_bottom_copyright">
        <p> <a href="https://www.facebook.com/AlafAlWadi/"><img src="assets/images/wady/facebook.png" width="45"/></a>
         : تابعونا على</p>
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
        <a href="#" className="side-menu__toggler side-menu__close-btn"><img src="assets/images/shapes/close-1-1.png" /></a>
      </div>{/* /.side-menu__top */}
      <nav className="mobile-nav__container">
        {/* content is loading via js */}
      </nav>
      <div className="side-menu__sep" />{/* /.side-menu__sep */}
      <div className="side-menu__content">
        <p><a href="mailto:sales@wadifeed.com">sales@wadifeed.com</a> <br /> <a href="tel:19528">19528</a></p>
        <div className="side-menu__social">
          <a href="https://www.facebook.com/AlafAlWadi/"><i className="fab fa-facebook-square" /></a>
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
