<svelte:head>
   
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

</svelte:head>


<script>
	import { onMount } from "svelte";


    onMount(()=>{
    const resume = document.getElementById("resume")
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav ul li ");
        resume.addEventListener("scroll",function(e) {
        //window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            console.log(sectionTop , resume.scrollTop)
            if (resume.scrollTop>= sectionTop - 105) {
            current = "nav_"+section.getAttribute("id"); 
            console.log(current)
        
        }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
            li.classList.add("active");
            }
        });
        })
    })
    
    let y;
   
    
</script>

        <div class="stickySideBar bg-success nav">
            
            <div class="image-cropper">
                <img src="https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg" class="rounded" />
            </div>


            <h5>Samaneh Sharbaf Tabrizi</h5>
            <p> some job description  </p>
            <ul class="links" style="list-style: none;">
                <li class="link nav_introduction active"  ><i class="fa-solid fa-user" style="margin-right: 10px;"></i><a href="#introduction"> Introduction </a></li>
                <li class="link nav_Education" ><i class="fa-solid fa-school" style="margin-right: 10px;"></i><a href="#Education" i class:highlight={false}> Education </a></li>
                <li class="link nav_researches"><i class="fa-solid fa-book" style="margin-right: 10px;"></i><a href="#researches" class:highlight={false}> Researches </a></li>
                <li class="link nav_experiences"><i class="fa-solid fa-check" style="margin-right: 10px;"></i><a href="#experiences"> Experiances </a></li>
                <li class="link nav_contact"><i class="fa-solid fa-comment" style="margin-right: 10px;"></i><a href="#contact"> Contact </a></li>


            </ul>

        </div>



        <div class="resume" id="resume"  >


            <section class="container introduction " id="introduction">
                <div class="intro">

                
                <h2 class="font-weight-bold title">Introduction</h2>
                <p class=" text-muted some-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa eaque quibusdam veniam nobis cupiditate inventore aut. Dolorem ad nesciunt totam aspernatur, fugit officia provident blanditiis! Quia quos libero magni voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima alias perferendis, id, earum, repellendus optio doloremque ipsum cupiditate quod animi obcaecati sit. Consectetur, cum asperiores molestias tempore minima exercitationem error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus fugiat vitae animi eveniet hic cumque commodi. Repellendus provident cum placeat, odio quisquam culpa aliquid odit blanditiis incidunt atque velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsa aut consequuntur ipsam. Ea neque ipsum laudantium molestias quam, excepturi adipisci autem quibusdam veniam rerum officia similique. Minima, earum nobis.</p>
            </div>

            </section>


            <section class="container  Education"  id="Education" >
                <div class="education" >
                            
                    <div class="row text-center justify-content-center mb-5" style="margin-top: 0px;">
                        <div class="col-xl-6 col-lg-8">
                            <h2 class="font-weight-bold">Education</h2>
                            <p class="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
                        </div>
                    </div>
                
                    <div class="row">
                        <div class="col">
                            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">2003</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">2004</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">some random stuff</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">2005</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">some random stuff</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">2010</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">some random stuff</p>
                                    </div>
                                </div>
                                <div class="timeline-step mb-0">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">2020</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">some random stuff</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </section>
            

                <section class="container Researches" id="researches">
                     <div class="researches">


                            
                    <div class="row text-center justify-content-center mb-5">
                        <div class="col-xl-6 col-lg-8">
                            <h2 class="font-weight-bold">Researches</h2>
                            <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem corporis labore optio modi quidem dolorem ipsum error alias sit expedita.</p>
                        </div>
                    </div>
                
                   
                 
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                        <div class="col" >
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="text">
                                    <a href="#">Research 1</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col" >
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="text">
                                    <a href="#">Research 1</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col" >
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="text">
                                    <a href="#">Research 1</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col" >
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="text">
                                    <a href="#">Research 1</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col" >
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="text">
                                    <a href="#">Research 1</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col" >
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div class="text">
                                    <a href="#">Research 1</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                    
                    </section>



            <section class="container Experiances" id="experiences">

                
            
                    
<div class="experiances">
    <div class="container">
      <h2 class=" font-weight-bold  row text-center justify-content-center ">Experiences</h2>
      <p class=" pb-3 pt-2  text-center text-muted border-bottom mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut eum quisquam ipsam, amet nobis, sunt reiciendis dolor sapiente voluptates inventore.</p>
      <!--first section-->
      <div class="row align-items-center how-it-works d-flex">
        <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
          <div class="circle font-weight-bold">1</div>
        </div>
        <div class="col-6">
          <h5>Fully Responsive</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
        </div>
      </div>
      <!--path between 1-2-->
      <div class="row timeline">
        <div class="col-2">
          <div class="corner top-right"></div>
        </div>
        <div class="col-8">
          <hr class="hr-bw"/>
        </div>
        <div class="col-2">
          <div class="corner left-bottom"></div>
        </div>
      </div>
      <!--second section-->
      <div class="row align-items-center justify-content-end how-it-works d-flex">
        <div class="col-6 text-right">
          <h5>Using Bootstrap</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
        </div>
        <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
          <div class="circle font-weight-bold">2</div>
        </div>
      </div>
      <!--path between 2-3-->
      <div class="row timeline">
        <div class="col-2">
          <div class="corner right-bottom"></div>
        </div>
        <div class="col-8">
          <hr class="hr-bw"/>
        </div>
        <div class="col-2">
          <div class="corner top-left"></div>
        </div>
      </div>
      <!--third section-->
      <div class="row align-items-center how-it-works d-flex">
        <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
          <div class="circle font-weight-bold">3</div>
        </div>
        <div class="col-6">
          <h5>Now with Pug and Sass</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
        </div>
      </div>
    </div>
  </div>

            
                        
                  
                    
                 
                
        </section>

            <section class="container Contact" id="contact">
                <div class="contact">
                
                <div class="contactText">

                    <div class="place-text">
                    <h3>Why Don't You Contact Me ? </h3>
                    <div style="contactMetext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia iste vero quo veritatis nesciunt maiores dolore, voluptatibus excepturi illum, reprehenderit assumenda exercitationem ipsum quaerat facere dignissimos natus tempore autem aliquid.</div>
                    </div>

                    <div class="socialmedia">
                        <a href=""><i class="fa-brands fa-instagram" style="color: #d80eba; ; font-size: 27px;  "></i></a>
                        <a href=""><i class="fa-brands fa-whatsapp" style="color: #0f9209; ; font-size: 27px;  "></i></a>
                        <a href=""><i class="fa-brands fa-telegram" style="color: #2fcbff; ; font-size: 27px;  "></i></a>
                        <a href=""><i class="fa-solid fa-envelope" style="color: white;  background: blue; padding:5px; border-radius : 5px ;  "></i></a>
                        <a href=""><i class="fa-solid fa-phone" style="color: white;  background: green; padding:5px; border-radius : 5px ;  "></i></a>
                        <a href=""><img src="src\routes\(diff-nav)\aboutMe\shad.png" alt="" width="25px"></a>                    
                        <a href=""><img src="src\routes\(diff-nav)\aboutMe\rubika.png" alt="" width="30px"></a>

                      </div>

                </div>
                <div class="contactForm">

                    <form class="row g-3">
                       
                        <div class="col-md-6">
                          <label for="name" class="form-label">Name</label>
                          <input type="name" class="form-control" id="name" placeholder="Reyhaneh">
                        </div>
                     
                        <div class="col-md-6">
                            <label for="last_name" class="form-label">Last Name</label>
                            <input type="name" class="form-control" id="last_name" placeholder="Sharbaf Tabrizi">
                        </div>

                          <div class="col-md-8">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="example@gmail.com">
                          </div>

                          <div class="col-md-4">
                            <label for="inputState" class="form-label">Role</label>
                            <select id="inputState" class="form-select">
                              <option selected>Choose...</option>

                              <option>Parent</option>
                              <option>Teacher</option>
                              <option>Student</option>

                              <option>Other</option>

                            </select>
                          </div>

                        <div class="col-12" >
                          <label for="message" class="form-label"> Message </label>
                          <input type="text" class="form-control" id="message" placeholder="How can I help you ? " style="padding-bottom: 70px;">
                        </div>

                     
                        <div class="col-12">
                          <button type="submit" class="btn btn-success" style="width: 100%; height:45px; ">submit</button>
                        </div>
                      </form>

                     
                </div>
            </div>
            </section>
         </div>

           <!-- <div class="container main">
                
                <ul class="timeline">
                    <li class="position-relative pl-3 py-2">
                        <div class="fw-bold text-success mb-1">The origin</div>
                        <div class="d-flex flex-column mb-1">
                            <time class="position-absolute start-0 translate-middle-y bg-success text-white px-2 py-1 rounded-pill" style="left: -120px;">May, 2020</time>
                            <div class="text-primary">Acme was founded in Milan, Italy</div>
                        </div>
                        <div class="text-muted">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </li>
                    <li class="position-relative pl-3 py-2">
                        <div class="fw-bold text-success mb-1">The milestone</div>
                        <div class="d-flex flex-column mb-1">
                            <time class="position-absolute start-0 translate-middle-y bg-success text-white px-2 py-1 rounded-pill" style="left: -120px;">May, 2021</time>
                            <div class="text-primary">Reached 5K customers</div>
                        </div>
                        <div class="text-muted">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </li>
                    <li class="position-relative pl-3 py-2">
                        <div class="fw-bold text-success mb-1">The acquisitions</div>
                        <div class="d-flex flex-column mb-1">
                            <time class="position-absolute start-0 translate-middle-y bg-success text-white px-2 py-1 rounded-pill" style="left: -120px;">May, 2022</time>
                            <div class="text-primary">Acquired various companies, including Technology Inc.</div>
                        </div>
                        <div class="text-muted">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </li>
                   
                </ul>
                
            </div>-->



<style>

.active{
    font-size: 20px;
}
.circle {
  padding: 13px 20px;
  border-radius: 50%;
  background-color: green;
  color: #fff;
  max-height: 50px;
  z-index: 2;
}

.how-it-works.row .col-2 {
  align-self: stretch;
}

.how-it-works.row .col-2.bottom::after {
  height: 50%;
  left: 50%;
  top: 50%;
}
.how-it-works.row .col-2.full::after {
  height: 100%;
  left: calc(50% - 3px);
}
.how-it-works.row .col-2.top::after {
  height: 50%;
  left: 50%;
  top: 0;
}


.timeline div {
  padding: 0;
  height: 40px;
}
.timeline hr {
  border-top: 3px solid green ;
  margin: 0;
  top: 17px;
  position: relative;
}

.hr-bw{
  border: 0;
  height: 10px;
  opacity: 1;
}

.timeline .col-2 {
  display: flex;
  overflow: hidden;
}
.timeline .corner {
  border: 3px solid green;
  width: 100%;
  position: relative;
  border-radius: 15px;
}
.timeline .top-right {
  left: 50%;
  top: -50%;
}
.timeline .left-bottom {
  left: -50%;
  top: calc(50% - 3px);
}
.timeline .top-left {
  left: -50%;
  top: -50%;
}
.timeline .right-bottom {
  left: 50%;
  top: calc(50% - 3px);
}


.introduction{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.box_ {
  transition: all 2s ease;
  transform: translateY(100px);
  opacity: 0;


}

.box_.show {
  transform: translateY(0px);
  opacity: 1;
}

#research{
    transition: all 2s ease;
}

#research.highlight{
    color: white;
    font-size: 20px;
}

#education.highlight{
    color: white;
    font-size: 20px;
}
.some-col{
    width: 40%;
    margin-right: 50px;
    

}
form{
    margin-top: 40px;
    margin-bottom: 40px;

}


.socialmedia{
    margin-top: 40px;
    text-align: center;
    display: flex;
    gap: 20px;
    justify-content: center;
}

.contactText{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.contactForm{
    width: 40%;
}


.place-text h3{
    text-align: center;
}
.place-text div{

    padding-top: 30px;
    text-align: center;
}
.contact {
    width: 85%;
    gap: 10%;
    display: flex;
    padding-top: 0px;

}


.researches{
    width: 85%;
    text-align: justify;
    padding-top: 100px;
    padding-bottom: 100px;


}

.Researches{
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}


.Experiances{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}
.experiances{
    width:85%; 

}

.Contact{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}


.card{
    height: 110px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border: none;

  
}
.icon{
    height: 100%;
    width: 25%;
    color: #16a34a;
    background-color:#f0fdf4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.icon i{
    font-size: 40px;

}

.text{
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
    padding: 10px;
    padding-left: 20px;
    text-align: left;

}


.text p{
    font-size: 14px;
}
.text a{
    text-decoration: none;
    color: #0b4e23;
    font-weight: bold;
}
.title{
    margin-top: 40px;
    margin-bottom: 25px;
    text-align: center;
}
.intro{
    width: 80%;
    text-align: center;
    padding-bottom: 80px;


}

.education{
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth; /* <--- */

}

.Education{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.links{
    line-height: 45px;
    text-align: center; 
    margin: 0 auto !important;
    padding: 0;
}

.link{
    margin: 0 auto !important;
    padding: 0;
    color: white;
}

.link a{
    color: white;
    text-decoration: none;
}


  
    .image-cropper {
        width: 80%;
        height: 40%;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin-top: 30px;

        
        
            }
    .rounded {
        height: 80%;
  min-width: 80%;
  left: 48%;
  position: relative;
  transform: translateX(-50%);
        
    }

    .stickySideBar {
        color: white;
        position: fixed;
        height: 100%;
        width: 20%;
        display: flex;
        top: 0;
        padding-top: 120px;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
    }

    section{
        padding-top: 105px;
    }

    .resume {
        width: 80%;
        height: 100%;
        overflow-y: scroll;
        margin-left: 20%;
        position:fixed;
        scroll-behavior: smooth;    }






    .timeline-steps {
    display: flex;
    justify-content: center;
    flex-wrap: wrap
}

.timeline-steps .timeline-step {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 1rem
}

@media (min-width:768px) {
    .timeline-steps .timeline-step:not(:last-child):after {
        content: "";
        display: block;
        border-top: .25rem dotted #16a34a;
        width: 3.46rem;
        position: absolute;
        left: 7.5rem;
        top: .3125rem
    }
    .timeline-steps .timeline-step:not(:first-child):before {
        content: "";
        display: block;
        border-top: .25rem dotted #16a34a;
        width: 3.8125rem;
        position: absolute;
        right: 7.5rem;
        top: .3125rem
    }
}

.timeline-steps .timeline-content {
    width: 10rem;
    text-align: center
}

.timeline-steps .timeline-content .inner-circle {
    border-radius: 1.5rem;
    height: 1rem;
    width: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #16a34a;
}

.timeline-steps .timeline-content .inner-circle:before {
    content: "";
    background-color: #16a34a;
    display: inline-block;
    height: 3rem;
    width: 3rem;
    min-width: 3rem;
    border-radius: 6.25rem;
    opacity: .5
}

</style>
