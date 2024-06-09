<script >
  	/** @type {import('./$types').PageData} */

    export let data;

  
    

    function myFunction() {
    var input, filter, mainDiv, divs, title, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    mainDiv = document.getElementById("page-content_");
    divs = mainDiv.getElementsByClassName("card_");
    for (i = 0; i < divs.length; i++) {
        title = divs[i].getElementsByClassName("title")[0];
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().includes(filter)) {
            divs[i].style.display = "";
        } else {
            divs[i].style.display = "none";
        }
    }
}
   /* let essays = [
        {   
            title : "Green Life" , 
            text  : "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains" ,
            image : "https://heyimreadingcom.files.wordpress.com/2021/06/18490532.jpeg?w=302"

        } , 
        {
            title : "To The Beach" , 
            text  : "Plan your next beach trip with these fabulous destinations" ,
            image : "https://offtheshelf.b-cdn.net/app/uploads/2015/06/Boy-Snow-Bird.jpg"
        } ,
        {
            title : "Desert Destinations" , 
            text  : "It's the desert you've always dreamed of" ,
            image : "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"

        } , 
        {
            title : "Explore The Galaxy" , 
            text  : "Seriously, straight up, just blast off into outer space today" ,
            image : "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        },
        {   
            title : "Mountain View" , 
            text  : "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains" ,
            image : "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"

        } 
       
    ]*/
    
</script>


<nav class="navbar bg-body-tertiary "  style="background-color: #14A44D !important;" >
    <div class="container-fluid" >
      <a class="navbar-brand" style="color:white;">Essays</a>
      <form class="d-flex" role="search">

        <input class="form-control me-2" type="text" id="myInput"  on:keyup={() =>{myFunction()}} placeholder="Search for a title.." aria-label="Search" title="Type in a name">
        <button class="btn" type="submit" style="background-color: white !important;"><strong style="color:green;">Search</strong></button>
      </form>
    </div>
  </nav>


  {#if data.essays.length == 0}
    <div class="container" style=" display:flex; align-items:center; height:80vh">
      <h1 class="text-muted text-center" style="width: 100%; ">No Essays Uploaded Yet</h1>
    </div>
  {:else}
  <main class="page-content" id="page-content_">
 
 
      {#each data.essays as essay  , index }



        <div class="card_" style="background-image: url({essay.image_url
        }); background-repeat:no-repeat;     background-size: 100% 100%;">
          
            <div class="content">
                <h2 class="title">{essay.name}</h2>
                <p class="copy">{essay.description}</p>
                <button class="btn_">Read</button> 
            </div>
        </div>
     {/each}
  

  </main>


  {/if}


<style>

@import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");
:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
  --font-sans: "Rubik", sans-serif;
  --font-serif: "Cardo", serif;
}

* {
  box-sizing: border-box;
}



.page-content {

  display: grid;
  width: 90% !important;
  grid-gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  font-family: var(--font-sans);
}
@media (min-width: 600px) {
  .page-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 800px) {
  .page-content {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card_ {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem !important;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}
@media (min-width: 600px) {
  .card_ {
    height: 350px;
  }
}
.card_:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  transition: transform calc(var(--d) * 1.5) var(--e);
  pointer-events: none;
}
.card_:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(to bottom, hsla(0deg, 0%, 0%, 0) 0%, hsla(0deg, 0%, 0%, 0.009) 11.7%, hsla(0deg, 0%, 0%, 0.034) 22.1%, hsla(0deg, 0%, 0%, 0.072) 31.2%, hsla(0deg, 0%, 0%, 0.123) 39.4%, hsla(0deg, 0%, 0%, 0.182) 46.6%, hsla(0deg, 0%, 0%, 0.249) 53.1%, hsla(0deg, 0%, 0%, 0.32) 58.9%, hsla(0deg, 0%, 0%, 0.394) 64.3%, hsla(0deg, 0%, 0%, 0.468) 69.3%, hsla(0deg, 0%, 0%, 0.54) 74.1%, hsla(0deg, 0%, 0%, 0.607) 78.8%, hsla(0deg, 0%, 0%, 0.668) 83.6%, hsla(0deg, 0%, 0%, 0.721) 88.7%, hsla(0deg, 0%, 0%, 0.762) 94.1%, hsla(0deg, 0%, 0%, 0.79) 100%);
  transform: translateY(-50%);
  transition: transform calc(var(--d) * 2) var(--e);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;
}
.content > * + * {
  margin-top: 1rem;
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
}

.copy {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

.btn_ {
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
}
.btn_:hover {
  background-color: #0d0d0d;
}
.btn_:focus {
  outline: 1px dashed yellow;
  outline-offset: 3px;
}

@media (hover: hover) and (min-width: 600px) {
  .card_:after {
    transform: translateY(0);
  }
  .content {
    transform: translateY(calc(100% - 4.5rem));
  }
  .content > *:not(.title) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
  }
  .card_:hover,
.card_:focus-within {
    align-items: center;
  }
  .card_:hover:before,
.card_:focus-within:before {
    transform: translateY(-4%);
  }
  .card_:hover:after,
.card_:focus-within:after {
    transform: translateY(-50%);
  }
  .card_:hover .content,
.card_:focus-within .content {
    transform: translateY(0);
  }
  .card_:hover .content > *:not(.title),
.card_:focus-within .content > *:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
  }
  .card_:focus-within:before, .card_:focus-within:after,
.card_:focus-within .content,
.card_:focus-within .content > *:not(.title) {
    transition-duration: 0s;
  }
}


</style>