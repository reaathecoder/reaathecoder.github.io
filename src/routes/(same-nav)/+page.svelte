<svelte:head>


    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="https://unpkg.com/scrollreveal@3.3.2/dist/scrollreveal.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>


   
   

</svelte:head>


<script>
	import { onMount } from "svelte";



onMount(()=>{

const boxes = document.querySelectorAll('.box')
const pics = document.querySelectorAll('.pic')
const infos = document.querySelectorAll('.information')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {

  console.log("yo?" + boxes.length)

  // trigger point - where we want to start scrolling
  const triggerBottom = window.innerHeight * 0.9
  const triggerSide = window.innerHeight * 0.4 ; 

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top
      if(boxTop < triggerBottom ) {
        box.classList.add('show')
      } else {
        box.classList.remove('show')
      }
    })


    pics.forEach(pic => {
      const picTop = pic.getBoundingClientRect().top
      console.log(picTop)
      if(picTop < triggerSide) {
        pic.classList.add('showw')
      } else {
        pic.classList.remove('showw')
      }
    })


    infos.forEach(info => {
      const infoTop = info.getBoundingClientRect().top
      console.log(infoTop)
      if(infoTop < window.innerHeight * 0.8 ) {
        info.classList.add('showww')
      } else {
        info.classList.remove('showww')
      }
    })
}

})
    
    
</script>
<div id="carouselExampleIndicators" class="carousel slide gallary-slider" data-bs-ride="carousel" data-bs-interval="2500">
  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner gallary-slider" >
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2023/10/28/10/31/child-8347081_1280.jpg" class="d-block w-100" alt="...">
      
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/02/09/16/59/college-student-2052868_1280.jpg" class="d-block w-100" alt="...">
  
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/08/23/15/01/board-1614646_1280.jpg" class="d-block w-100" alt="...">
      
   
  </div>

  
    <div class="container link-item ">
      <div class="container X" >
          <i class="fa-solid fa-book"></i>
          <p>کتاب ها</p>
       </div>
      
        <a href="./videos"  class="container X" >
          <i class="fa-solid fa-laptop"></i>
          <p>فیلم آموزشی</p>
        </a>
       <a class="container X" href = "./essays" >
          <i class="fa-solid fa-paperclip"></i>
          <p>مقالات</p>
       </a>
       <div class="container X" on:click={ ()=> {window.open("./quiz");}} >
          <i class="fa-solid fa-file"></i>
          <p>نظرسنجی</p>
       </div>
   </div>
  </div>	 


  

  <div class="container  ">
      <div class="carousel-caption " >
        <h1>روش های تدریس</h1>
        <p>در این سایت من سمانه شعرباف درباره تجربیات تدریسم مینویسم</p>
      </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>


</div>

<div class="aboutMe " >
  <div class="picturee pic" class:showw={false}>
    <img src="/teacher.png" alt="">
  </div>

  <div class="aboutMeText information"  class:showww={false} dir="rtl" id="aboutMe">

    <h3>من کی هستم ؟ </h3>

          <p class="para-me">	
            خوش آمدید به وب‌سایت من! من یک معلم با انگیزه و پرانرژی هستم که عاشق یادگیری و اشتراک دانش با دانش‌آموزانم هستم. با بیش از ده سال تجربه در آموزش، من به عنوان یک همراه قدرتمند برای دانش‌آموزانم در مسیر یادگیریشان حضور دارم. هدف من ایجاد یک محیط دوستانه، پراحساس و انگیزشی است که دانش‌آموزان بتوانند به آرامش و با اعتماد به نفس دانش خود را گسترش دهند. از طریق روش‌های تدریس نوآورانه و استفاده از فناوری‌های مدرن، من تلاش می‌کنم تا به هر دانش‌آموز بهترین فرصت برای رشد و توسعه فراهم کنم. به من بپیوندید و با هم به دنیای جذاب یادگیری سفر کنیم! 
          </p>

          <p class="paraa-me"> 
            	خوش آمدید به وب‌سایت من! من یک معلم با انگیزه و پرانرژی هستم که عاشق یادگیری و اشتراک دانش با دانش‌آموزانم هستم. با بیش از ده سال تجربه در آموزش، من به عنوان یک همراه قدرتمند برای دانش‌آموزانم در مسیر یادگیریشان حضور دارم. هدف من ایجاد یک محیط دوستانه، پراحساس و انگیزشی است که... 
          </p>


          <p class="paraaa-me" style="display: none;"> 
            	خوش آمدید به وب‌سایت من! من یک معلم با انگیزه و پرانرژی هستم که عاشق یادگیری و اشتراک دانش با دانش‌آموزانم هستم. با بیش از ده سال تجربه در آموزش....
          </p>
      
        
      
      <a href="\aboutMe"><button type="button" class="btn bg-success bishtar" style="border-radius: 5px !important; padding:10px !important; margin-top:20px;   background:#14A44D; color:white;"  >بیشتر بدانید ... </button></a>

  
  </div>
  
  <div class="picture pic" class:showw={false}>
      <img src="/teacher.png" alt="">

  </div>
</div>
<section class="our-achievement section overlay" >
  <div class="container">
      <div class="row">
          <div class="col-lg-3 col-md-3 col-12">
              <div class="single-achievement wow fadeInUp" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                  <h3 class="counter"><span id="secondo1" class="countup" > </span></h3>
                  <h4></h4>
              </div>
          </div>
          <div class="col-lg-3 col-md-3 col-12">
              <div class="single-achievement wow fadeInUp" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                  <h3 class="counter"><span id="secondo2" class="countup" > </span></h3>
                  <h4></h4>
              </div>
          </div>
          <div class="col-lg-3 col-md-3 col-12">
              <div class="single-achievement wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                  <h3 class="counter"><span id="secondo3" class="countup" > </span></h3>
                  <h4></h4>
              </div>
          </div>
          <div class="col-lg-3 col-md-3 col-12">
              <div class="single-achievement wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                  <h3 class="counter"><span id="secondo3" class="countup" > </span></h3>
                  <h4></h4>
              </div>
          </div>
      </div>
  </div>
  
  <div class="container linkk-item "  style="  display: none;">
    <div class="container X">
        <i class="fa-solid fa-book"></i>
        <p>کتاب ها</p>
     </div>
     <div class="container X" on:click={ ()=> {window.open("./videos");}}>
        <i class="fa-solid fa-laptop"></i>
        <p>فیلم آموزشی</p>
     </div>
     <div class="container X" on:click={ ()=> {window.open("./essays");}}>
        <i class="fa-solid fa-paperclip"></i>
        <p>مقالات</p>
     </div>
     <div class="container X" on:click={ ()=> {window.open("./about");}}>
        <i class="fa-solid fa-file"></i>
        <p>نظرسنجی</p>
     </div>
 </div>

 <div class="container linkkk-item "  style=" display: none;">
  
  <div class=" row row_">
  <div class="container X">
      <i class="fa-solid fa-book"></i>
      <p>کتاب ها</p>
   </div>
   <div class="  container X" on:click={ ()=> {window.open("./videos");}}>
      <i class="fa-solid fa-laptop"></i>
      <p>فیلم آموزشی</p>
   </div>
  </div>
  
  <div class=" row row_">
   <div class="container X" on:click={ ()=> {window.open("./essays");}}>
      <i class="fa-solid fa-paperclip"></i>
      <p>مقالات</p>
   </div>
   <div class="container X" on:click={ ()=> {window.open("./about");}}>
      <i class="fa-solid fa-file"></i>
      <p>نظرسنجی</p>
   </div>
  </div>
</div>
</section>




<div dir="rtl" class=" d-flex justify-content-center box title-text info-box" style="padding-top: 50px;">
  <h1>صفحات مرتبط</h1>
  
</div>

<div class="info"  style="">

 
  <div class="row row-cols-4 all-cards" >

    <div class="col box column" >
        <div class="card">
          <img src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
          <div class="card-body" dir="rtl">
            <h5 class="card-title">تجربیات من</h5>
            <p class="card-text">در این قسمت من سعی کردم تجربیاتم رو با شما با اشتراک بذارم  </p>
          </div>
        </div>
      </div>
      <div class="col box column">
        <div class="card">
          <img src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
          <div class="card-body" dir="rtl">
            <h5 class="card-title">وبینار ها</h5>
            <p class="card-text">برای مشاهده ی وبینار های اموزشی روی این قسمت کلیک کنید  </p>
          </div>
        </div>
      </div>
      <div class="col box column" class:show={false}>
        <div class="card">
          <img src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
          <div class="card-body" dir="rtl">
            <h5 class="card-title">کتب آموزشی</h5>
            <p class="card-text">این بخش درباره کتب آموزشی در حوزه شیوه های تدریس است</p>
          </div>
        </div>
      </div>
      <div class="col box last-item column">
        <div class="card ">
          <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="..." >
          <div class="card-body" dir="rtl">
            <h5 class="card-title">نظرسنجی</h5>
            <p class="card-text">با شرکت در نظرسنجی بمن کمک کنید تا مطالب مفید تری بارگزاری کنم </p>
          </div>
        </div>
      </div>
    </div>

</div>



<div class="row row-cols-1 row-cols-md-2 g-4  for-smaller-screen" style="width: 50%; margin: 0 auto; display:none; " >
  <div class="col" style="width: 50%;">
    <div class="card" >
      <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
      <div class="card-body" dir="rtl">
        <h5 class="card-title">تجربیات من</h5>
        <p class="card-text">در این قسمت من سعی کردم تجربیاتم رو با شما با اشتراک بذارم  </p>
      </div>
    </div>
  </div>
  <div class="col" style="width: 50%;">
    <div class="card" >
      <img src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
      <div class="card-body" dir="rtl">
        <h5 class="card-title">وبینار ها</h5>
        <p class="card-text">برای مشاهده ی وبینار های اموزشی روی این قسمت کلیک کنید  </p>
      </div>
    </div>
  </div>
  <div class="col" style="width: 50%;">
    <div class="card" >
      <img src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
      <div class="card-body" dir="rtl">
        <h5 class="card-title">کتب آموزشی</h5>
        <p class="card-text">این بخش درباره کتب آموزشی در حوزه شیوه های تدریس است</p>
      </div>
    </div>
  </div>
  <div class="col" style="width: 50%;">
    <div class="card" >
      <img src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
      <div class="card-body" dir="rtl">
        <h5 class="card-title">نظرسنجی</h5>
        <p class="card-text">با شرکت در نظرسنجی بمن کمک کنید تا مطالب مفید تری بارگزاری کنم </p>
      </div>
    </div>
  </div>
</div>


<div class=" container-fluid last_div" >
  <div class="some-text information"   dir="rtl" >
    <h3>مدرسه من</h3>
    <p style="text-align:center" >
      خوش آمدید به مدرسه! مکانی که دانش‌آموزان با شادی و انرژی به دنبال دانش و مهارت‌های جدید می‌گردند. در مدرسه، دانش‌آموزان از مختلف بخش‌های جامعه با هم آشنا می‌شوند و با محیطی پراز امکانات آموزشی ورزشی و هنری روبه‌رو می‌شوند. اینجا جایی است که دانش‌آموزان نه تنها مهارت‌های درسی خود را یاد می‌گیرند بلکه مهارت‌های اجتماعی و همکاری نیز را تقویت می‌کنند. از لحظه ورود به مدرسه تا زمانی که به دنیای بیرون بازمی‌گردند، مدرسه جایی است که دانش‌آموزان با تلاش، پشتکار و انگیزه به دنبال رسیدن به موفقیت و رشد هستند.
  </p>
  <div style="display:flex; gap:10px; padding-right:10px;">
  <button type="button" class="btn text-white " style="width:300px; padding:10px; background:rgb(5, 13, 74); ">ادامه</button>
  <button type="button" class="btn text-white " style="width:50%; padding:10px; background: #3C4A3E;">گالری</button>
</div>

  </div>
  
  <div class="gallary ">
    <div class="big " ></div>
    <div class="half" >
      <div class="half_"></div>
      <div class="half-img"></div>
    </div>
  </div>

</div>

<section class="home-testimonial">
  <div class="container-fluid">
      <div class="row d-flex justify-content-center testimonial-pos">
          <div class="col-md-12 pt-4 d-flex justify-content-center">
          </div>
          <div class="col-md-12 d-flex justify-content-center" style="padding-bottom: 10px;">
              <h2>تجربه دانش آموز ها</h2>
          </div>
      </div>
      <div class="home-testimonial-bottom">
          <div class="container testimonial-inner">
              <div class="row d-flex justify-content-center">
                  <div class="col-md-4 style-3 box" class:show={false}>
                      <div class="tour-item ">
                          <div class="tour-desc bg-white">
                              <div class="tour-text color-grey-3 text-center" dir="rtl" >"من واقعا از این کلاس لذت می‌برم! معلممون واقعا با انگیزه و خوش‌فکره و درس‌ها خیلی جذاب ارائه می‌شه. خیلی ممنون از این تجربه عالی!"
                               </div>
                              <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt=""></div>
                              <div class="link-name d-flex justify-content-center">کوثر خاکی</div>
                              <div class="link-position d-flex justify-content-center">دانش آموز</div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 style-3 box" class:show={false}>
                      <div class="tour-item ">
                          <div class="tour-desc bg-white">
                              <div class="tour-text color-grey-3 text-center" dir="rtl">"من واقعا از این کلاس لذت می‌برم! معلممون واقعا با انگیزه و خوش‌فکره و درس‌ها خیلی جذاب ارائه می‌شه. خیلی ممنون از این تجربه عالی!"





                              </div>
                              <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></div>
                              <div class="link-name d-flex justify-content-center"> نازنین منطقی</div>
                              <div class="link-position d-flex justify-content-center">دانش آموز</div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 style-3 box" class:show={false}>
                      <div class="tour-item ">
                          <div class="tour-desc bg-white">
                              <div class="tour-text color-grey-3 text-center" dir="rtl">


                                "من واقعا از این کلاس لذت می‌برم! معلممون واقعا با انگیزه و خوش‌فکره و درس‌ها خیلی جذاب ارائه می‌شه. خیلی ممنون از این تجربه عالی!"





                              </div>
                              <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></div>
                              <div class="link-name d-flex justify-content-center">شادی غمگین</div>
                              <div class="link-position d-flex justify-content-center">دانش آموز</div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
</section>

  <!-- Remove the container if you want to extend the Footer to full width. -->
<div class="container-fluid my-5 footer_" style="width: 100%; margin-bottom:0 !important; ">
  <!-- Footer -->
  <footer class="text-center text-white" style="  background-color: rgb(37, 36, 36);  ">
    <!-- Grid container -->
    <div class="container-fluid">
      <!-- Section: Links -->
      <div class="mt-5">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#" class="text-white" style="text-decoration: none;">درباره من</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#" class="text-white" style="text-decoration: none;">مطالب  آموزشی</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#" class="text-white" style="text-decoration: none;">جایزه ها</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#" class="text-white" style="text-decoration: none;">سوالات</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#" class="text-white" style="text-decoration: none;">ارتباط با من</a>
            </h6>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
    </div>
      <!-- Section: Links -->

      <hr class="my-5" />

      <!-- Section: Text -->
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8" dir="rtl">
            <p class="text_footer">
              از شنیدن افکار و نظرات شما بسیار خوشحال می‌شویم. برای هر گونه پرسش یا اطلاعات بیشتر، لطفاً با ما تماس بگیرید. تیم ما در انتظار ارتباط با شماست تا به شما در تمام مراحل بهترین پشتیبانی را ارائه دهیم.


              همچنین، شما می‌توانید از طریق فرم تماس در وب‌سایت ما پیام خود را ارسال کنید و ما در اسرع وقت به آن پاسخ خواهیم داد. ما از ارتباط با شما بسیار خوشنود خواهیم شد و امیدواریم که بتوانیم به تمامی نیازهای شما پاسخ دهیم.



            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <div class="text-center mb-5">
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
         ©Copyright 2024 Samaneh Sharbaf. All rights reserved. Designed and Developed by Reyhaneh Sharbaf






    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
<!-- End of .container -->




<style>



.container-fluid {
  padding: 0 !important;
}
.home-testimonial{background-color: #14A44D;height: 300px ;margin-bottom: 180px !important;}

.home-testimonial-bottom{    
    box-sizing: border-box;
  width: 100%;
  transition: 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin-top: 20px;
  padding: 0;
  display: flex;
  height: 130px;
  position: relative;
  top: 190px;}
  
  .home-testimonial h3{color: var(--orange);font-size: 16px;font-weight: 500;text-transform: uppercase}
  
  .home-testimonial h2{color: white;font-size: 28px;font-weight: 700}
  
  .testimonial-inner{position: relative;top: -174px;}
  
  .testimonial-pos{position: relative;top: 24px}
  
  .testimonial-inner .tour-desc{border-radius: 5px;padding: 40px}
  
  .color-grey-3{font-size: 14px;color: #081f5e; font-size: 17px; padding-bottom: 10px; }
  
  .testimonial-inner img.tm-people{width: 60px;height: 60px;-webkit-border-radius: 50%;border-radius: 50%;-o-object-fit: cover;object-fit: cover;}

  .tour-item{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  
  .link-name{ font-size: 14px;color: #1b8642; font-weight: bold;}
  
  .link-position{ font-size: 13px;color: #4d5b6d}


.some-text{
  display: flex;
  text-align: justify;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 20px;
  padding: 50px;
  width: 55%;
}

.gallary{
  margin: 20px;
  width: 45%;
  display: flex;
  gap: 10px;
}

.big{

  width: 55%;
  background-color: rgb(5, 13, 74);
  background-image: url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: 10px;
  overflow: hidden;


}



/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  * {
    
  }
  }

.half{
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.half-img{
  height: 50%;
  background-color: #0EDC8D;
  background-image: url("https://images.pexels.com/photos/6281994/pexels-photo-6281994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: 100% 100%;
  
}

.half_{
  background-image: url("https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  height: 50%;
  background-size: 100% 100%;
  background-color: #1b3d23;

}

.footer{
  height: 500px;
  background-color: rgb(37, 36, 36);

}
  

.last_div{
  display: flex;
  padding: 30px;
  gap: 30px;
  height: 450px;
  background-color: #EBEEFF;
  margin-top: 20px;
  margin-bottom: 20px;
}

  .our-achievement .single-achievement h4{
      font-weight: 700;
  font-size: 20px;
  display: block;
  margin-top: 15px;
  color: #fff;

  }
  .single-achievement {
  position: relative;
  z-index: 1;
}

.section{
  margin-top: 100px;
}
.our-achievement .single-achievement {
margin-top: 30px;
text-align: center;
padding: 0;
}

.our-achievement .single-achievement h3 {
font-size: 35px;
font-weight: 700;
display: block;
margin-bottom: 15px;
color: #fff;
}

.our-achievement .single-achievement h4 {
font-weight: 700;
font-size: 20px;
display: block;
margin-top: 15px;
color: #fff;
}

.paraa-me{display: none;}

.box {
  transition: all 2s ease;
  transform: translateY(100px);
  opacity: 0;

}

.box.show {
  transform: translateY(0px);
  opacity: 1;
}


.pic {
  transition: all 2s ease;
  transform: translateX(100px);
  opacity: 0;

}

.pic.showw {
  transform: translateX(0px);
  opacity: 1;
}

.information{
  transition: all 2s ease;
  transform: translateX(-100px);
  opacity: 0;

}

.information.showww {
  transform: translateX(0px);
  opacity: 1;
}


.title-text{
  color:#1b3d23;
}
.info{
  height: 400px;
  width: 80%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

}

.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border: none !important;

}
.card:hover {
box-shadow: 0 8px 16px 0 rgba(8, 108, 45, 0.2);
}
/*@media only screen and (max-width: 767px){

  .our-achievement .single-achievement h4 {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  
}



}*/





.our-achievement {
  position: relative;
  background-image: url("https://demo.graygrids.com/themes/edugrids/assets/images/achievement/achievement-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  padding-top: 70px;
  padding: 90px 0 120px 0;
}

.our-achievement.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 138, 70, 0.82); /* Green color with opacity */
}




.section {
  padding-top: 120px;
  padding-bottom: 120px;
  position: relative;
}

.our-achievement {
  background-color: #0EDC8D;
}

  .gallary-slider{
      width:100%;
      height: 70vh;


  }

  .carousel-item:after {
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background:rgba(0,0,0,0.6);
      }

.link-item{
  display: flex !important;
  justify-content: center;

  align-items: center;
  height: 160px;
  width:  50% ; 
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  gap: 10px;

}

.linkk-item{
display: none;

}

.X{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: black;
  text-decoration:none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: white solid 1px;
  background-color: white;
  height: 140px;
  width: 25%;
  font-size: 17px;
  padding: 0;
  

}

.X i {
  font-size: 40px;
  padding: 0;
  color: green;
}

.aboutMe{
  height: 300px;
  display: flex;
  gap: 30px;
  margin: 30px;
  margin-top: 10px;
}

.picture{
  width: 30%;

}

.picturee{
  display: none;
}


.aboutMeText{
  width: 70%;
  padding: 100px;
  margin-top: 10px;
  padding-top: 30px;


}

.aboutMe p{
  text-justify: distribute;
  padding-top: 10px;
  padding-bottom: 10px;
}


.all-cards{
  display: flex;
  flex-direction: row;
}


@media (max-width: 1100px) {
  *{
  }

  .all-cards{
    display: flex;
  flex-direction: row;
}
}




/* On screens that are 992px or less, set the background color to blue */
@media (max-width: 992px)  {



.gallary-slider{

background-color: #1b3d23;

}

.link-item{
  display: none !important;
}

.linkk-item{
  display: flex !important;
  justify-content: center;

  align-items: center;
  height: 160px;
  width:  80% ; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  gap: 10px;
}

.linkkk-item{
  display: none;
}


.info{
  margin-top: 100% !important;
  margin-bottom: 100% !important;
}
.last_div{
  justify-content: center;
  align-items: center;
  margin-top: 120%;
  flex-direction: column;
  height: 800px;
  gap: 0;
 
  
}

.some-text{
  width: 100%;

}
.gallary{
  padding : 0px !important;
  margin: 0px !important;
  width: 80%;
     height: 300px;
  flex-direction: column;
}

.big{
  height: 100%;
  width: 100%;
}


.half{
  width: 100%;
  flex-direction: row;
  height: 100%;
  display: flex !important;
  
}

.half-img{
  width: 50%;
  height: 100%;
}

.half_{
  width: 50%;

  height: 100%;
}

.aboutMe{
  margin: 0;
  padding: 0;
  gap: 0;
  flex-direction: column;
  margin-bottom: 70%;
  text-align: center;

}

.aboutMeText{
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
}

.picturee{
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.picture{
  display: none;
}

.home-testimonial{
  justify-content: center;
  align-items:center ;
  height: 600px !important;
  margin-bottom: 5px !important ;
}


.last_div{
  margin-top: 0px !important;
}
.tour-item{
  width: 100%;
  margin-bottom: 20px;
}

.text_footer{
  margin: 20px;
  text-align: justify;
  text-align: center;
}


.all-cards{
  display: none;
}
.rubrik{
  display: block;
}

.for-smaller-screen{
  width: 80% !important;
  display: flex !important;
  
  margin-bottom: 20px !important;
}

.info{
  display: none !important;
}

/*
.all-cards{

  padding-top: 0px !important;
  padding: 0px !important;
  display: flex;
  flex-direction: column;
  
  
}

.card{
  width: 100% !important;
  margin-bottom: 20px;

}


.row-cols-1{
    width:80% !important;
    margin-bottom: 10px !important;
}
*/



}


@media (max-width: 765px) {

  
  
  .info{
  display: flex !important;
  margin-top: 120% !important;
}

.all-cards{
  padding-top: 0px !important;
  padding: 0px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.column{
  width: 90% !important;
}
.last-item{
  margin-bottom: 40% ;
}
.card{
  width: 100% !important;
  margin-bottom: 20px;
}
.for-smaller-screen{
  display: none !important;}




.home-testimonial{
  height: 1050px !important ;
}
}
@media (max-width: 580px) {

*{
}

.aboutMe{
  margin: 0;
  padding: 0;
  gap: 0;
  flex-direction: column;
  margin-bottom: 0px !important;
  text-align: center;
  gap: 0;
  height: 600px;

}

.container{
  margin: 5px !important;
}

.aboutMeText{
  height: 1000px;
 padding-bottom: 0px !important; 
   
  
}

.picturee img{

  height: 100%;
  margin: 0px !important;
}

.row_{
  display: flex;

  flex-direction: row;
}
.picturee{
  height: 80%;
  margin-bottom: 0px !important;
  padding-bottom: 0px !important;
}
.gallary-slider{

  background-color: #1b3d23;

}

.para-me{
  display: none;
}
.paraa-me{
  display: block;
}

.linkk-item{
  display: none !important;
  
}
.linkkk-item{
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  
  align-items: center;
  height: 160px;
  width:  600px ; 
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}



.row_{
  padding : 0px !important;
  width: 90%;
  display: flex;
  justify-content: center;
 


}

.linkk-item{
  display: none;
}
.home-testimonial{
  justify-content: center;
  align-items:center ;
  height: 1100px;
}

.last-item{
  margin-bottom: 70px;
  
}


}

@media (max-width: 480px) {

  .paraa-me{
    display: none;
  }
  .paraaa-me{
    display: block !important;
  }


}

</style>