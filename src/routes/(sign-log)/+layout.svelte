<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</svelte:head>

<script>
	
	function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		const container = document.getElementById("resume")
		container.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
	}


</script>
<div class="header">
<div class=" top-bar" style="color:#2f3c43; background:#14A44D;"> 
	<div class=" bg-stone  top-bar"> <div class="container"> 
		<div class="row"> <div class="col-lg-7 d-none d-lg-block">
			
			<ul class="list-inline d-flex justify-content-xl-start align-items-center h-100 mb-0"> 

				<li> 
                    <span class=" icon-header me-xl-2 icon" > 
                    <i class="fas fa-envelope text-white " aria-hidden="true"></i> 
                    </span> 
                    <a href="mailto:info@yourdomain.com" class="me-lg-4 me-xl-6 text-white opacity-80">example@gmail.com</a>
                </li> 
                <li> 
                    <span class=" icon-header me-xl-2 icon">
                    <i class="fas fa-phone-alt text-white " aria-hidden="true"></i>
                     </span> 
                     <a href="tel:+49 704282679" class="me-lg-4 me-xl-6 text-white opacity-80">+۴۹  ۷۰۴۲۸۲۶۷۹  </a> 
                </li>
                <li class="text-white">
                     <span class="icon-header icon" >
                         <i class="far fa-clock " aria-hidden="true"></i> 
                    </span> 
                    <span class="opacity-80"> ساعت: ۹ تا ۲۰</span>
                 </li> 
            </ul> 
        
        </div>
        
        <div class="col-lg-5"> 
            <ul class="list-inline d-flex mb-0 justify-content-xl-end justify-content-center align-items-center me-xl-2"> 
                <li> 
                    <span class=" icon-header me-lg-0 me-xl-1 icon" >
                         <i class="fas fa-globe text-white" aria-hidden="true"></i>
                     </span> 
                </li> 
                
                <li class="me-3 me-md-4 me-lg-3 me-xl-5  dropdown"> 
                    <a class="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false"> زبان </a>
                     <ul class="dropdown-menu"> 
                        <a class="dropdown-item" href="javascript:void(0)">English</a>
                        <a class="dropdown-item" href="javascript:void(0)">Spanish</a>
                        <a class="dropdown-item" href="javascript:void(0)">Hindi</a> 
                     </ul> 
                </li> 
                
            </ul>
       </div>
    </div>
   </div>
  </div> 
</div>


 

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
	  <a class="navbar-brand" href="#">استاد بانک <span><i class="fa-solid fa-chalkboard-user" style="color: #14A44D ;"></i></span></a>
	  
	  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNavDropdown">
		<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
		  <li class="nav-item">
			<a class="nav-link active tab-marker" aria-current="page" href="./">خانه</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="/Edu_content">مطالب آموزشی</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">تکنولوژی های آموزشی</a>
		  </li>
		 
		  <li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			  معرفی کتاب
			</a>
			<ul class="dropdown-menu">
			  <li><a class="dropdown-item" href="#">Action</a></li>
			  <li><a class="dropdown-item" href="#">Another action</a></li>
			  <li><a class="dropdown-item" href="#">Something else here</a></li>
			</ul>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="./#aboutMe" on:click={handleAnchorClick} >درباره من</a>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>
</div>


<slot/>


<style> .icon{ border-radius:30px; padding:10px; } /* #0d6efd; --bs-indigo: #6610f2; --bs-purple: #a597e7; --bs-pink: #ea77ad; --bs-red: #dc3545; --bs-orange: #fd7e14; --bs-yellow: #ffc107; --bs-green: #198754; --bs-teal: #20c997; --bs-cyan: #0dcaf0; --bs-white: #fff; --bs-gray: #6c757d; --bs-gray-dark: #343a40; --bs-primary: #f0c24b; --bs-secondary: #6c757d; --bs-warning: #f0c24b; --bs-danger: #ea7066; --bs-success: #b5d56a; --bs-info: #84bed6; --bs-light: #f5f5f5; --bs-dark: #222; --bs-purple: #a597e7; --bs-pink: #ea77ad; --bs-stone: #2f3c43; */ .color-bar { height: 10px; } .top-bar{ padding: .125rem 0; } .logo{ width:30%; height: 20%; } .nav_{ padding: 10px; } .nav-item{ padding: 5px  1.8125rem  0  1.8125rem  ; display: flex; flex-direction: column; justify-content: center; align-items: center; } .nav-item i{ padding: 10px; border-radius: 10px; } 
.tab-marker{
		
	background-color: #14A44D ;
	border-radius: 30px;
	padding: 6px 15px 6px 15px !important;
	color:white !important;
	}

.header{
	z-index: 10;
	position: fixed;
	width: 100% ;
	top : 0 ; 
	
}



</style>
