<script>
	import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;
    

    let checked = false;

    
    
</script>

<svelte:head>


    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="https://unpkg.com/scrollreveal@3.3.2/dist/scrollreveal.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>

    

   
   

</svelte:head>

<main>
    
    <div class="container signUp">


        <div class="layoutCard">

          

        </div>

        <div class="form container">
           

              <h2 class="text-success" style="margin-bottom: 20px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Sign up</h2>

                <form class="row g-3" use:enhance method="post" action="?/signup">
                    <div class="col-md-6">
                      <label for="inputName" class="form-label">Name</label>
                      <input type="text" class="form-control" id="inputName"  name="name" placeholder="Reyhaneh Sharbaf Tabrizi"  required />
                    </div>
                    <div class="col-md-6">
                      <label for="inputUsername" class="form-label">Username</label>
                      <input type="text" class="form-control" id="inputUsername" name="username" placeholder="reysha06" required />
                    </div>
                    <div class="col-12">
                      <label for="inputEmail" class="form-label">Email</label>
                      <input type="email" class="form-control" id="inputEmail" name="email" placeholder="example@gmail.com" required />
                    </div>
                    <div class="col-md-7">
                      <label for="inputPassword" class="form-label" >Password</label>
                      <div class="input-group mb-3">
                        <input class="form-control password block  w-full" id="password" type="password" name="password"  required />
                        <span class="input-group-text togglePassword" id="" style="width: 40px;" >
                            <i class="fa-solid fa-eye-slash" style="cursor: pointer; margin:auto;" ></i>
                        </span>
                    </div>
                     
                    </div> 
                 
                    <div class="col-md-5">
                      <label for="inputRole" class="form-label">Role</label>
                      <select id="inputRole" class="form-select" name="role" required  >
                        <option selected value="">Choose...</option>
                        <option>Student</option>
                        <option>Teacher</option>
                        <option>Parents</option>
                        <option>Others</option>
                      </select>
                    </div>


                    <div class="col-md-8" style=" ">
                        <div class="form-check">
                          <input class="form-check-input accent" type="checkbox" id="gridCheck"  bind:checked={checked} 
                          on:change={
                            (e) => {
                              checked = e.target.checked;
                              console.log(checked);
                            }
                          }>
                          <input type="hidden" name="sendupdates" value={checked} />
                          <label class="form-check-label" for="gridCheck">
                            receive notifications & updates 
                          </label>
                        </div>
                      </div>
                  
                    <div class="col-12" style="margin-top: 30px;">
                      <button type="submit" class="btn btn-success" style="width: 100%; padding:15px;">Sign up</button>
                    </div>
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

    .signUp{

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
    }

    .accent{
      accent-color: green !important;
    }

    input[type='checkbox'] {
      accent-color: green !important;
}


</style>
