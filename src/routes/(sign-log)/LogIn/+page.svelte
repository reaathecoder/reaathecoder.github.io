<script>
	import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;

    
</script>

<svelte:head>


    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="https://unpkg.com/scrollreveal@3.3.2/dist/scrollreveal.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>

    

   
   

</svelte:head>

<main>
    
    <div class="container Login">


        <div class="layoutCard">



        </div>

        <div class="form container">
            <form use:enhance method="post" action="?/login">

              <h2 class="text-success" style="margin-bottom: 30px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Log in</h2>
                <form class="row g-3">

                   
                  
                    <div class="col-12">
                      <label for="inputUsername" class="form-label">Username</label>
                      <input type="text" class="form-control" id="inputUsername" placeholder="">
                    </div>
                 
                    <div class="col-12">
                      <label for="inputPassword" class="form-label">Password</label>
                      <div class="input-group mb-3">
                        <input class="form-control password block  w-full" id="password" type="password" name="password"  required />
                        <span class="input-group-text togglePassword" id="" style="width: 40px;" >
                            <i class="fa-solid fa-eye-slash" style="cursor: pointer; margin:auto;"></i>
                        </span>
                    </div>
                     
                    </div> 
                 

                     <p><a href="#" style="color: #12d06c;">Forgot my password</a></p> 
                  
                    <div class="col-12" style="margin-top: 20px;">
                      <button type="submit" class="btn btn-success" style="width: 100%; padding:15px;">Log in </button>
                    </div>
                  </form>

            </form>
         </div>  

    </div>

</main>



<style>

form i {
            margin-left: -30px;
            cursor: pointer;
        }
    main{
        margin-top: 60px;
        height: 100vh;
        width: 100%;
        background-color: #d7ede6;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Login{


        width: 70%;
        height: 70%;
        background-color: white;
        display: flex;
        padding: 0%;



    }

   

    .layoutCard {
        background-size: cover;

        position: relative;
        z-index: 0;
        }

.layoutCard::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:  #12d06c;
    opacity: .6;
    /* !!! */
    z-index: -1;
}

.layoutCard {
  width: 45%;
  position: relative;
  text-align: center;
  color: white;
  background-image:url("loginCard.jpg") ;
}


    .form{
        width: 55%;
        padding: 50px;
        align-items: center;
        display: flex;

    }

</style>
