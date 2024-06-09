<script>
	import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import Input from './Input.svelte';
  import Link from './Link.svelte';
  export let form;

    /** @type {import('./$types').PageData} */
    export let data;
    
    let fileinput ;
    let  avatar ;
    let  changedAvatar ;
    let changedFileinput ;
    let x = 0 ; 
    let group = 1;
    

let flavours = [];
let flavours2 = [];

	let menuOpen = false;
  let menuOpen2 = false;
	let inputValue = "";
	$:console.log(inputValue)
	
	let filteredItems = [];
  
  let menuItems = data.categories.map(category => category.name);
	
	const handleInput = () => {
		
		return filteredItems = menuItems.filter(item => item.toLowerCase().match(inputValue.toLowerCase()));	
		
	}

  const onFileSelected =(e)=>{
  let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
}

const onFileSelectedToChange =(e)=>{
  let img = e.target.files[0];
            let readerr = new FileReader();
            readerr.readAsDataURL(img);
            readerr.onload = e => {
                 changedAvatar = e.target.result
            };
}


let catsToRemove = []; 
let post ; 
</script>



<svelte:head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>

</svelte:head>

<main>

  {#if form?.missingId }
    <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
      <strong>Ooops ! </strong> You must provide an ID  
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  {:else if form?.missingFields}
    <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
      <strong>Ooops ! </strong> You must provide at least one field to update
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  {:else if form?.emptyField}
  <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
    <strong>Ooops ! </strong> You must fill all the fields in order to create a post
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  {:else if form?.successfullyCreated}
  <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
    <strong>Success ! </strong> Post has been created successfully
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  {:else if form?.successfullyUpdated}
  <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
    <strong>Success ! </strong> Post has been updated successfully
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  {:else if form?.successfullyDeletedPost}

  <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
    <strong>Success ! </strong> Post has been deleted successfully
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  {:else if form?.successfullyDeletedCat}
  <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
    <strong>Success ! </strong> Category has been deleted successfully
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  {:else if form?.IDnotAvailable}
  <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
    <strong>Ooops ! </strong> ID not available
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  {/if}

    <div class=" section add">
        <div style=" width:90%;">
            <h1>Add Post</h1>
         </div>
        <form action="?/create" method="POST" enctype="multipart/form-data" >
            <input type="text" name="title" placeholder="Title" class="input">

            <input type="url-content" name="url-content" placeholder="Paste the link " class="input">

            
            <div style="width:100%; padding:0; margin:0; " >

                <div class="radio-group" style="display:flex; gap:10px; margin:0; padding:0 ; margin-bottom: 30px;  justify-content:left;  width:100% ">
          
                <div style=" width:20%">
                  <label for="url" class="text-muted"> Image Url 
                     <input type="radio" bind:group value={1} class="my-super-special-classname"  name="url" id="url1"    />
                  </label>
                </div>

                <div style= "width:20%;" >
                  <label for="url" class="text-muted"> Upload Image 
                    <input type="radio" bind:group value={2} class="my-super-special-classname"  name="img" id="url2"  />
                  </label>     
                </div>
              </div>
          
                {#if group == 1 }
                      <input type="text" name="image_url" placeholder="Image URL" class="input">

                {:else if group == 2 }
          
                <label for="image">Upload image here</label>
          
                  <div style="display:flex; width:100%; gap:20px;  ">
                  
                    <div class="form-group file-input"  style="width:75%; height:200px; border:1px dotted grey; background:#f5f5f5;  display:flex; justify-content:center; align-items:center; border-radius:5px; " >
                      <div style="border:gray 1px dashed; width: 85%; height:80%; background:white; display:flex; justify-content:center; align-items:center; border-radius:5px; ">
                        <input type="file" name="image" id="image" accept="image/*" class="fileInput" on:change={(e)=>onFileSelected(e)} bind:this={fileinput}  required />
                        <label for="image">Select File</label>
            
                      </div>
                    </div>
            
                    <div class="form-group" style="width:25%; height:200px; border:1px dashed grey;  display:flex; justify-content:center; align-items: center; border-radius:5px;">
            
                      {#if avatar}
                      <img class="avatar" src="{avatar}" alt="d" style="width:100%; height:100%; " />
                      {:else}
                      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png" alt="" style="width:90%; height:100%; " />
                      {/if}
            
                    </div>
            
                    </div>
          
                {/if}
                </div>

            <textarea type="text" name="content" placeholder="Type The Post's Content Here ... "></textarea>


            <div class="labels" style="width:100% ; padding:0; margin:0 auto;   ">
                  
                                
                  <section class="dropdown" style="width:100% !important; padding:0; margin:0 ; ">
                    
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div  style="display:flex; width:100%; padding:0;" on:click={() => menuOpen = !menuOpen} {menuOpen}   >	
                      <Input bind:inputValue on:input={handleInput} />	
                      <button type="button" class="addlabButt" on:click={()=>
                                                      { 
                                                      console.log("clicked", inputValue)
                                                      if (!menuItems.includes(inputValue)){
                                                            menuItems.push(inputValue);
                                                            console.log(data)
                                                            menuItems = menuItems ; 
                                                        }else{
                                                        console.log("already exists")
                                                        }
                                                      inputValue = ''; 
                                                      filteredItems = []; 
                                                      filteredItems = filteredItems; 
                                                      inputValue = inputValue; 
                                                        
                                                      }
                                                    }>+</button>
                      </div>
                      <div class:show={menuOpen}  class="dropdown-content" style="margin:0% !important; " >
                        
                      {#if filteredItems.length > 0}
                        {#each filteredItems as item}
                          <div style="width:100%; padding:10px;  display:flex; flex-direction:column;     ">
                        <label style=" width:100%;  " >
                          <input
                            style="margin-right:10px; "
                            type="checkbox"
                            name="categories"
                            value={item}
                            bind:group={flavours}
                          />
                      
                          {item}
                        </label>
                          </div>
                        {/each}
                      {:else}
                        
                        {#each menuItems as item}
                          <div style="width:100%; padding:10px;  display:flex; flex-direction:column;     ">
                        <label style=" width:100%;  " >
                          <input
                            style="margin-right:10px; "
                            type="checkbox"
                            name="categories"
                            value={item}
                            bind:group={flavours}
                          />
                      
                          {item}
                        </label>
                          </div>
                        {/each}
                      {/if}	
                     </div>
                   
                  </section>

                  <div class="labels-chosen" >
                    {#if flavours.length != 0 }
                      <div class="labdiv">

                      {#each flavours as flavour,index}


                    <div class="labbDiv">
                      {flavour}
                      <button 
                        type="button"
                        style="border:none; background:transparent; color:red; outline:none; "
                        on:click={()=>{
                        flavours.splice(index,1); 
                        flavours = flavours ; 
                      }} >x</button>
                    </div>
                        {/each}
                        </div>

                    {/if}
                  </div>

                 

          </div>
            



            <button type="submit" class="btn create-butt" >Add</button>
        </form>
    </div>
    <div class=" section update">
      <div style=" width:90%;">
        <h1>Update Post</h1>
     </div>
    <form action="?/update" method="POST" enctype="multipart/form-data">


      <div class="group" style="display: flex; ">
       <input type="number" name="id" placeholder="ID" class="input" min="1" max="10">
       <button class="btn btn-success" style="height: 65px; width:100px; border-radius:0px !important; " 
        type="button" on:click={ ()=>{
          let id = document.querySelector('input[name="id"]').value;
          if (id){
               console.log("id" , id)

                post = data.edu_contents.find(post => post.id == id);
                post = post; 
                
                if (post){
                  if (post.image.includes('http')) {
                    group = 1;
                }
                else {
                    group = 2;
                }
                };
          }}}>Load</button>
      </div>
      
        <div>
          {#if post}
            <table>
              
              <tr>
                <th>field</th>
                <th>content</th>
              </tr>
              {#each Object.keys(post) as key}
                <tr>
                  <td><strong>{key}</strong></td>
                  {#if key === 'image'}
                    <td><img src={post[key]} alt="image" style="width: 100px; height: 100px;" /></td>
                  {:else if key === 'category'}
                    <td>{post[key].map(category => category.name).join(', ')}</td>
                  {:else}
                  <td>{post[key]}</td>
                  {/if}
                </tr>
              {/each}
            </table>
          {/if}
        </div>

        {#if post}

        <input type="text" name="title" placeholder="Title" class="input" value="{post.title}">


    
      
        <input type="url-content" name="url-content" placeholder="Paste the link " class="input" value="{post.link}">
        
        
        
        <div style="width:100%; padding:0; margin:0; " >

            <div class="radio-group" style="display:flex; gap:10px; margin:0; padding:0 ; margin-bottom: 30px;  justify-content:left;  width:100% ">
      
            <div style=" width:20%">
              <label for="url" class="text-muted"> Image Url 
                 <input type="radio" bind:group value={1} class="my-super-special-classname"  name="url" id="url1"    />
              </label>
            </div>

            <div style= "width:20%;" >
              <label for="url" class="text-muted"> Upload Image 
                <input type="radio" bind:group value={2} class="my-super-special-classname"  name="img" id="url2"  />
              </label>     
            </div>

            
          </div>
      
            {#if group == 1 }

                {#if post.image.includes('http')}

                <input type="text" name="image_url" placeholder="Image URL" class="input" value="{post.image}">

           
                {:else}

                  <input type="text" name="image_url" placeholder="Image URL" class="input">
           
                {/if}

            {:else if group == 2 }
      
            <label for="image">Upload image here</label>
      
              <div style="display:flex; width:100%; gap:20px;  ">
              
                <div class="form-group file-input"  style="width:75%; height:200px; border:1px dotted grey; background:#f5f5f5;  display:flex; justify-content:center; align-items:center; border-radius:5px; " >
                  <div style="border:gray 1px dashed; width: 85%; height:80%; background:white; display:flex; justify-content:center; align-items:center; border-radius:5px; ">
                    <input type="file" name="image_update" id="image_update" accept="image/*" class="fileInput" on:change={(e)=>onFileSelectedToChange(e)} bind:this={changedFileinput}   />
                    <label for="image_update">Select File</label>
        
                  </div>
                </div>
        
                <div class="form-group" style="width:25%; height:200px; border:1px dashed grey;  display:flex; justify-content:center; align-items: center; border-radius:5px;">
        
                  {#if changedAvatar}
                  <img class="avatar" src="{changedAvatar}" alt="d" style="width:100%; height:100%; " />
                  {:else}
                  <img src="{post.image}" alt="" style="width:90%; height:100%; " />
                  {/if}
        
                </div>
        
                </div>
      
            {/if}
            </div>

            

     
     
      
            <textarea type="text" name="content" placeholder="Type The Post's Content Here ... "  >{post.content}</textarea>

        

        <div class="labels" style="width:100% ; padding:0; margin:0 auto;   ">
              
                            
              <section class="dropdown" style="width:100% !important; padding:0; margin:0 ; ">
                
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div  style="display:flex; width:100%; padding:0;" on:click={() => menuOpen2 = !menuOpen2} {menuOpen2}   >	
                  <Input bind:inputValue on:input={handleInput} />	
                  <button type="button" class="addlabButt" on:click={()=>
                                                  {
                                                  console.log("clicked", inputValue)
                                                  if (!menuItems.includes(inputValue)){
                                                        menuItems.push(inputValue);
                                                        menuItems = menuItems ; 
                                                    }else{
                                                    console.log("already exists")
                                                    }
                                                  inputValue = ''; 
                                                  filteredItems = []; 
                                                  filteredItems = filteredItems; 
                                                  inputValue = inputValue; 
                                                    
                                                  }
                                                  
                                                }>+</button>
                  </div>
                  <div class:show={menuOpen2}  class="dropdown-content" style="margin:0% !important; " >
                    
                  {#if filteredItems.length > 0}
                 
                    {#each filteredItems as item}
                      <div style="width:100%; padding:10px;  display:flex; flex-direction:column;     ">
                    <label style=" width:100%;  " >
                      <input
                        style="margin-right:10px; "
                        type="checkbox"
                        name="items"
                        value={item}
                        bind:group={flavours2}
                      />
                  
                      {item}
                    </label>
                      </div>
                    {/each}
                  {:else}
                    
                    {#each menuItems as item}
                      <div style="width:100%; padding:10px;  display:flex; flex-direction:column;     ">
                    <label style=" width:100%;  " >
                      <input
                        style="margin-right:10px; "
                        type="checkbox"
                        name="items"
                        value={item}
                        bind:group={flavours2}
                      />
                  
                      {item}
                    </label>
                      </div>
                    {/each}
                  {/if}	
                 </div>

                 
               
              </section>

              <!--
                  <input name="id" type="hidden" value={post.id} />
                      <button type="submit" style="padding:5px; border:none;   display:flex; justify-content:center; background:transparent;   " class="remove">X</button>
              -->
              <div class="labels-chosen" >
                
                {#if post}
                {#if post.category.length != 0 }
                    <h6 style="color: rgb(201, 231, 170);  ">existing labels</h6>
                {/if}
                  <div class="labdiv">
                     {#each post.category as cat , index}
                     <div class="labbDiv">
                      {cat.name}
                      

                      <button 
                        type="button"
                        style="border:none; background:transparent; color:red; outline:none; " 
                        on:click={()=>{
                          // cat.name to string
                          post.category.splice(index , 1 )
                          catsToRemove.push([cat.name]);
                          catsToRemove = catsToRemove ;

                        }} > x</button>
                    </div>
                        {/each}

                        
                     <input name="catRem" type="hidden" value={catsToRemove} />

                     <hr style="border-bottom: 2px dotted green; width:100%">
                     <h6 style="color: rgb(201, 231, 170);"> new labels</h6>
                  </div>
                {/if}
                

                {#if flavours2.length != 0 }
                  <div class="labdiv">

                  {#each flavours2 as flavour,index}


                <div class="labbDiv">
                  {flavour}
                  <button 
                    type="button"
                    style="border:none; background:transparent; color:red; outline:none; "
                    on:click={()=>{
                    flavours2.splice(index,1); 
                    flavours2 = flavours2 ; 
                  }}>x</button>
                </div>
                    {/each}
                    </div>

                {/if}
              </div>

              

      </div>


        {:else}
        <input type="text" name="title" placeholder="Title" class="input">

    
      
        <input type="url-content" name="url-content" placeholder="Paste the link " class="input">
        
        
        
        <div style="width:100%; padding:0; margin:0; " >

            <div class="radio-group" style="display:flex; gap:10px; margin:0; padding:0 ; margin-bottom: 30px;  justify-content:left;  width:100% ">
      
            <div style=" width:20%">
              <label for="url" class="text-muted"> Image Url 
                 <input type="radio" bind:group value={1} class="my-super-special-classname"  name="url" id="url1"    />
              </label>
            </div>

            <div style= "width:20%;" >
              <label for="url" class="text-muted"> Upload Image 
                <input type="radio" bind:group value={2} class="my-super-special-classname"  name="img" id="url2"  />
              </label>     
            </div>

            
          </div>
      
            {#if group == 1 }
                  <input type="text" name="image_url" placeholder="Image URL" class="input">

            {:else if group == 2 }
      
            <label for="image">Upload image here</label>
      
              <div style="display:flex; width:100%; gap:20px;  ">
              
                <div class="form-group file-input"  style="width:75%; height:200px; border:1px dotted grey; background:#f5f5f5;  display:flex; justify-content:center; align-items:center; border-radius:5px; " >
                  <div style="border:gray 1px dashed; width: 85%; height:80%; background:white; display:flex; justify-content:center; align-items:center; border-radius:5px; ">
                    <input type="file" name="image_update" id="image_update" accept="image/*" class="fileInput" on:change={(e)=>onFileSelectedToChange(e)} bind:this={changedFileinput}   />
                    <label for="image_update">Select File</label>
        
                  </div>
                </div>
        
                <div class="form-group" style="width:25%; height:200px; border:1px dashed grey;  display:flex; justify-content:center; align-items: center; border-radius:5px;">
        
                  {#if changedAvatar}
                  <img class="avatar" src="{changedAvatar}" alt="d" style="width:100%; height:100%; " />
                  {:else}
                  <img src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png" alt="" style="width:90%; height:100%; " />
                  {/if}
        
                </div>
        
                </div>
      
            {/if}
            </div>

            

     
     
      
        <textarea type="text" name="content" placeholder="Type The Post's Content Here ... " ></textarea>

      

        <div class="labels" style="width:100% ; padding:0; margin:0 auto;   ">
              
                            
              <section class="dropdown" style="width:100% !important; padding:0; margin:0 ; ">
                
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div  style="display:flex; width:100%; padding:0;" on:click={() => menuOpen2 = !menuOpen2} {menuOpen2}   >	
                  <Input bind:inputValue on:input={handleInput} />	
                  <button type="button" class="addlabButt" on:click={()=>
                                                  {
                                                  console.log("clicked", inputValue)
                                                  if (!menuItems.includes(inputValue)){
                                                        menuItems.push(inputValue);
                                                        menuItems = menuItems ; 
                                                    }else{
                                                    console.log("already exists")
                                                    }
                                                  inputValue = ''; 
                                                  filteredItems = []; 
                                                  filteredItems = filteredItems; 
                                                  inputValue = inputValue; 
                                                    
                                                  }
                                                  
                                                }>+</button>
                  </div>

                  <div class:show={menuOpen2}  class="dropdown-content" style="margin:0% !important; " >
                    
                  {#if filteredItems.length > 0}
                    {#each filteredItems as item}
                      <div style="width:100%; padding:10px;  display:flex; flex-direction:column;     ">
                    <label style=" width:100%;  " >
                      <input
                        style="margin-right:10px; "
                        type="checkbox"
                        name="items"
                        value={item}
                        bind:group={flavours2}
                      />
                  
                      {item}
                    </label>
                      </div>
                    {/each}
                  {:else}
                    
                    {#each menuItems as item}
                      <div style="width:100%; padding:10px;  display:flex; flex-direction:column;     ">
                    <label style=" width:100%;  " >
                      <input
                        style="margin-right:10px; "
                        type="checkbox"
                        name="items"
                        value={item}
                        bind:group={flavours2}
                      />
                  
                      {item}
                    </label>
                      </div>
                    {/each}
                  {/if}	
                 </div>
               
              </section>

             
              
              <div class="labels-chosen" >
             
               

                {#if flavours2.length != 0 }
                  <div class="labdiv">

                    
                  {#each flavours2 as flavour,index}


                <div class="labbDiv">
                  {flavour}
                  <button 
                    type="button"
                    style="border:none; background:transparent; color:red; outline:none; "
                    on:click={()=>{
                    flavours2.splice(index,1); 
                    flavours2 = flavours2 ; 
                  }}>x</button>
                </div>
                    {/each}
                    </div>

                {/if}
              </div>
      </div>
        
        {/if}
    

        

        <button type="submit" class="btn create-butt" >Update</button>
    </form>
    </div>
    <div class=" section delete">
      <div style=" width:100%; margin-bottom:20px;">
        <h1>Delete Post</h1>
     </div>    
     <form action="?/delete" method="POST" enctype="multipart/form-data" >
     <div class="group" style="display: flex; ">
      <input type="number" name="idToDel" placeholder="ID" class="input" min="1" max="10">
      <button class="btn btn-success" style="height: 65px; width:100px; border-radius:0px !important; " 
       type="button" on:click={ ()=>{

         let id = document.querySelector('input[name="idToDel"]').value;
         console.log("iddd" , id)
         if (id){
               post = data.edu_contents.find(post => post.id == id);
               post = post; 
             
         }}}>Find</button>

     </div>

      <div>
        {#if post}
          <table>
            
            <tr>
              <th><button type="submit" class="btn" style="background-color: red; color: white; width:100%; ">Delete</button><input name="id" type="hidden" value={post.id} /></th>
              <th>content</th>
            </tr>
            {#each Object.keys(post) as key}
              <tr>
                <td><strong>{key}</strong></td>
                {#if key === 'image'}
                  <td><img  src={post[key]} alt="image" style="width: 100px; height: 100px;" /></td>
                {:else if key === 'category'}
                  <td>{post[key].map(category => category.name).join(', ')}</td>
                {:else}
                <td>{post[key]}</td>
                {/if}
              </tr>
            {/each}
          </table>
          
        {/if}
      </div>
    
    </form>

      
    <div>
      <h2 style="color:rgb(201, 231, 170); margin-top: 30px; ">Table</h2>
    </div>

      <div class="container tabeldiv">
    
        <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col">#id</th>
                <th scope="col">created at</th>
                <th scope="col">title</th>
                <th scope="col">link</th>
                <th scope="col">content</th>
                <th scope="col">image address</th>
                <th scope="col">categories</th>
                <th scope="col">likes</th>
              </tr>
              
            </thead>
            <tbody>
        
            {#each data.edu_contents as post}
              <tr>
                <th>
                  <div class="scrollable">
                  <form method="post" action="?/delete"  style="border:none; padding:0; margin:0;  ">
                      <input name="id" type="hidden" value={post.id} />
                      <button type="submit" style="padding:5px; border:none;   display:flex; justify-content:center; background:transparent;   " class="remove">X</button>
                  </form>
                </div>
                </th>
                <th><div class="scrollable" >{post.id}</div></th>
                <td><div class="scrollable">{post.createdAt}</div></td>
                <td><div class="scrollable">{post.title}</div></td>
                <td><div class="scrollable">{post.link}</div></td>
                <td><div class="scrollable">{post.content}</div></td>
                <td><div class="scrollable">{post.image}</div></td>
                <td><div class="scrollable">{post.category.map((category) => category.name).join('\n')}</div></td>
                <td><div class="scrollable">{post.likes}</div></td>
              </tr>
            {/each}
        
            </tbody>
        </table>
      </div>
    
    </div>


    <div class="section deleteCat">
      <div style=" width:100%; margin-bottom:20px;">
        <h1>Delete Category</h1>
     </div>    
    
        <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col">#id</th>
                <th scope="col">name</th>
              </tr>
              
            </thead>
            <tbody>
        
            {#each data.categories as category}
              <tr>
                <th>
                  <div class="scrollable">
                  <form method="post" action="?/deleteCat" style="border:none; padding:0; margin:0;  ">
                      <input name="id" type="hidden" value={category.id} />
                      <button type="submit" style="padding:5px; border:none;   display:flex; justify-content:center; background:transparent;   " class="remove">X</button>
                  </form>
                </div>
              </th>
              <th><div class="scrollable">{category.id}</div></th>
              <td><div class="scrollable">{category.name}</div></td>
           
            </tr>
          {/each}
      
          </tbody>
      </table>
    </div>
                  
</main>



<style>



 td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    width:  100%;
    overflow: auto;
    padding: 10px;
    border: 1px solid #000;
    overflow-wrap: break-word;
    
  }
    th:nth-child(1), td:nth-child(1) { width: 50px; } /* adjust as needed */
    th:nth-child(2), td:nth-child(2) { width: 70px; } /* adjust as needed */
    th:nth-child(6), td:nth-child(6) { width: 300px; } /* adjust as needed */
    th:nth-child(4), td:nth-child(4) { width: 200px; } /* adjust as needed */
    th:nth-child(9), td:nth-child(9) { width: 70px; } /* adjust as needed */

    /* add more as needed for each column */

  .remove{
    color: red !important;
  }

  .remove:hover{
   font-size: larger;
  }

  .scrollable {
    max-height: 300px;
    overflow-y: auto;
  }
 
   table {
        table-layout:fixed;
        
        width: 100%;
        border-collapse: collapse;
    }


  
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .section{
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        margin-top: 50px;
        margin-bottom: 100px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f9f9f9;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);


    }

    .section div{
        width: 100%;
        text-align: left;
        padding: 10px;

    }
    .section div h1{
        
        margin-bottom: 40px;
        color: black;
        text-align: center;
        

    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin-top: 30px;
    }

    .input,textarea{
        margin-bottom: 10px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        border-bottom: 2px solid rgba(0,0,0,0.1); 

    }

    textarea{
        height: 200px;
        border: 2px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .create-butt{
        background-color: #198754;
        color: white;
        font-weight: bold;
        padding: 20px;
        border: none;
        outline: none;
        width: 100%;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 50px;
    }
    


  input{
        margin-bottom: 30px !important;
       
    }

      
  input[type='radio'] {
      accent-color: #407c1b;
  }

  input[type='checkbox'] {
      accent-color: #407c1b;
  }

  .upload{
      display:flex;
      height:50px;
      width:50px;
      cursor:pointer;

    }
    .avatar{
      display:flex;
      height:200px;
      width:200px;
      margin:30px 0 30px 0;

    }

  
    .fileInput{
      opacity: 0;
      width: 0.1px;
      height: 0.1px;
      position: absolute;
    }



  .file-input label {
    display: block;
    position: relative;
    width: 200px;
    height: 50px;
    border-radius: 25px;
    background: linear-gradient(40deg, #2e751a, #81c96d);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: transform .2s ease-out;
  }


  .labels{
    display: flex;
    flex-direction: column;
    margin-top: 30px !important;
    gap: 20px;
    margin: 0 auto !important;
    align-items: center;
    width: 100% !important;
    justify-content: center;

  }

    

  .dropdown {
    position: relative;
    display: inline-block;
  }

    
  .dropdown-content {
    display:none;
    position: absolute;
    background-color: #f6f6f6;
    width: calc(100%+50px);
    border: 1px solid #ddd;
    z-index: 1;
    margin: 0% !important;

  }

  .labels-chosen{
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100% !important;
    flex-wrap: wrap;
    justify-content: center !important;
    margin: 0px auto;
  }
  .addlabButt{
    
    width: 50px;
    background-color: #198754;
    color: white;
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    height: 70px;
  }
  /* Show the dropdown menu */	
  .show {display:block;}	

  .labdiv{
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100% !important;
    flex-wrap: wrap;
    margin: 0px auto;
    justify-content: center !important;
  }

  .labbDiv{
    border:dotted 1px green; 
    display:flex; 
    justify-content:space-between; 
    padding:10px; 
    color:green;  
    width: 31% !important; 

  }


</style>