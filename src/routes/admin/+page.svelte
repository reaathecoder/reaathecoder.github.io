<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let sidebar_pages = [
        {name: "Home", url: "/"  , setActive: true},
        {name: "Blog", url: "/admin-edu-content" , setActive: false},
        {name: "Quiz", url: "/admin-quiz", setActive: false},
        {name: "Essays", url: "/admin-essays", setActive: false},
        {name: "Videos", url: "/admin-videos" , setActive: false},
        {name: "About me", url: "/admin-videos" , setActive: false},
        {name: "Education Content", url: "/admin-videos" , setActive: false},

    ]

    let url = "/";

	
	function OpenPage( i) {
		for (let page in sidebar_pages){
			console.log(page)
			if (sidebar_pages[page].setActive){
				sidebar_pages[page].setActive = false;
			}
		}
		sidebar_pages[i].setActive = true;
		url = sidebar_pages[i].url
		url = url


	}
</script>

<div class="sidebar">
    {#each sidebar_pages as page , i}
        <button on:click={()=>{OpenPage(i)}} class:active={page.setActive}>{page.name}</button>
    {/each}
    
</div>

<div class=" main-div" >
    

    {#if url == "/"}
        <div class="wrapper">
            <div class="text">
                <i class="fa-solid fa-user-tie" style="font-size: 100px;"></i>

                    <h2 style="margin-bottom: 20px; margin-top: 50px;">
                        "Welcome To The Admin Page"
                    </h2>
                    <h4 class="text-muted">
                        here you can manage the content of your website
                    </h4>
                    <h6 class="text-muted">
                        Choose which page you want to manage from the sidebar on the left
                    </h6>

                    <button class="btn btn-success" style="margin: 40px; padding: 10px 40px 10px 40px; border-radius :30px; " >Start</button>
            </div>
        </div>  
    {:else}
        <iframe src={url} frameborder="0" ></iframe>
    {/if}
    

    
    

    
   
</div>


<div>
    
</div>
<style>

    .main-div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75%;
        float: right;
        height: 100vh;
    }

    .wrapper{
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .text{
        text-align: center;
        width: 80%;
        padding: 10px;
        line-height: 20px;
    }

    iframe{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 700px) {

        .main-div {
        width: 100%;


        }
    }
   

    .sidebar {
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  transition: width 0.5s ease-in-out; /* Add smooth transition for width */

}

.sidebar button{
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  width: 100%;
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease; /* Add smooth transitions for background color and text color */

}
 
.sidebar button.active {
  background-color: #04AA6D;
  color: white;
}

.sidebar button:hover:not(.active) {
  background-color: #555;
  color: white;
}





@media screen and (max-width: 700px) {

    .sidebar {
    width: 100%;
    height: auto;
    position: relative;

  }

        


  .sidebar button {
    text-align: center;
    float: none;
  }
}
</style>