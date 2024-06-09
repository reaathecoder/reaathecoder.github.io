<script>
    export let data;
    import { enhance } from '$app/forms'
    import { onMount } from 'svelte';
    import Radio from "./radio.svelte";
    export let form;

    let fileinput ;
    let  avatar ;
    let  changedAvatar ;
    let changedFileinput ;
    let x = 0 ; 
    let group = 1;
    
    onMount(()=>{

      window.addEventListener('DOMSubtreeModified', function() {
        let alert = document.getElementById("alert"); 


        if (alert != null){
          if (alert.classList.contains("alert-success")){
            console.log("success")
            document.getElementById("url1").setAttribute("checked", true)
            avatar = undefined ;
            group = 1; 
            group = group ; 

            changedAvatar = undefined ;

          }

          setTimeout(function(){
            alert.remove()
          }, 3000);
        }
      })




  })

	
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



function TextAbstract(text, length) {
    if (text == null) {
        return "";
    }
    if (text.length <= length) {
        return text;
    }
    text = text.substring(0, length);
    let last = text.lastIndexOf(" ");
    text = text.substring(0, last);
    return text + "...";
}


onMount(()=>{

})
</script>




{#if form?.missing }
<div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
  <strong>Ooops ! </strong> You must provide an ID  
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{:else if form?.invalid}
<div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
  <strong>Ooops!</strong> The ID you provided is invalid  
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

{:else if form?.success}
    <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
      <strong>Wowww!</strong> Successfully created a new essay
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

{:else if form?.error}
    <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
      <strong>Ooops!</strong> You must atleast provide one field to update
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

{/if}

    <section class="form-create">

      <h1 class="text-center" style="margin-top: 30px; "> Add Essay</h1>

      <form method="post" action="?/create" use:enhance enctype="multipart/form-data" id="create_form" class='pad-bg'>
   
        <div class="form-group">
          <label for="name">Name</label>
          <input name="name" type="text" class="form-control" id="inputAddress" required>
        </div>
        
        <div class="form-group">
            <label for="description">description</label>
            <input name="description" type="text" class="form-control" id="inputAddress" required>
        </div>
       
        <div class="form-group">
    
          <div class="radio-group" style="display:flex;  margin-bottom: 30px;">
    
          <div style="margin-right:20px;">
    
            <label for="url"> Image Url 
            <input type="radio" bind:group value={1} class="my-super-special-classname"  name="url" id="url1"  
          
           />
    
          </label>
    
          
          </div>
          <div style="margin-left: 20px; ">
            <label for="url"> Upload Image 
              <input type="radio" bind:group value={2} class="my-super-special-classname"  name="img" id="url2"  />
            </label>     
          </div>
          
        </div>
    
          {#if group == 1 }
    
    
                <label for="image_url">image url</label>
                <input name="image_url" type="text" class="form-control" id="inputAddress" required />
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
                <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" style="width:100%; height:100%; " />
                {/if}
      
              </div>
      
              </div>
    
          {/if}
        </div>
          
    
        
       
        <button type="submit" class="btn btn-success" id="create-button"  >Create</button>
      </form>
    </section>
<div class=" sect" >

<table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#id</th>
        <th scope="col">name</th>
        <th scope="col">description</th>
        <th scope="col">image url</th>
      </tr>
    </thead>
    <tbody>

    {#each data.essays as essay}
      <tr>
        <th scope="row">{essay.id}</th>
        <td>{essay.name}</td>
        <td>{essay.description}</td>
        <td>{essay.image_url }</td>
      </tr>
    {/each}

    </tbody>
</table>


</div>

<section class="form-update">
  <h1 class="text-center" style="margin-top: 30px; "> Update Essay</h1>

  <form method="post" action="?/update" use:enhance id="myForm"  enctype="multipart/form-data">



      <div class="form-group">
          <label for="id">ID</label>
          <input name="id" type="text" class="form-control" id="inputAddress" value={form?.id ?? ''}  />
        </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input name="name" type="text" class="form-control" id="inputAddress" >
      </div>
      <div class="form-group">
          <label for="description">description</label>
          <input name="description" type="text" class="form-control" id="inputAddress" >
      </div>
     
      
      <div class="form-group">

        <div class="radio-group" style="display:flex;  margin-bottom: 30px;">
  
          <div style="margin-right:20px;">
                <label for="url"> Image Url 
                <input type="radio" bind:group value={1} class="my-super-special-classname"  name="url" id="url1"   />
                </label>
          </div>
          <div style="margin-left: 20px; ">
                <label for="url"> Upload Image 
                <input type="radio" bind:group value={2} class="my-super-special-classname"  name="img" id="url2"  />
                </label>     
          </div>

      </div>
  
        {#if group == 1 }
  
  
              <label for="image_url">image url</label>
              <input name="image_url" type="text" class="form-control" id="inputAddress"  >
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
            <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" style="width:100%; height:100%; " />
            {/if}
  
          </div>
  
          </div>


        

      
        
  
        {/if}


      </div>
     <!--on:click={()=>{
        //setTimeout(function(){
       //   var form = document.getElementById("myForm");
        form.reset()
        }, 2000);
        
      }}-->
      <button type="submit" class="btn btn-success" >Update</button>
    </form>
  



</section>

<div class=" sect">
  
   
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#id</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">image url</th>
          </tr>
        </thead>
        <tbody>
    
        {#each data.essays as essay}
          <tr>
            <th scope="row">{essay.id}</th>
            <td>{essay.name}</td>
            <td>{essay.description}</td>
            <td>{essay.image_url}</td>
          </tr>
        {/each}
    
        </tbody>
    </table>
</div>



<div class=" sect">
    <h1 class="text-center" style="margin-top: 30px; color:green;"> Delete Essay</h1>



    

    <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">#id</th>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">image url</th>
          </tr>
        </thead>
        <tbody>
    
        {#each data.essays as essay}
          <tr>
            <th>
              <form method="post" action="?/delete" use:enhance style="border:none; padding:0; margin:0;  ">
                  <input name="id" type="hidden" value={essay.id} />
                  <button type="submit" style="padding:5px; border:none;   display:flex; justify-content:center; background:transparent;   " class="remove">X</button>
            </form>
            </th>
            <th scope="row">{essay.id}</th>
            <td>{essay.name}</td>
            <td>{essay.description}</td>
            <td>{essay.image_url}</td>
          </tr>
        {/each}
    
        </tbody>
    </table>

</div>



<style>

  .remove:hover{
    color:red;

  }

  
  section{
 
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f9f9f9;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 80%;
        margin: 40px auto;
        margin-bottom: 100px;
        margin-top: 100px ;
    
  }
    
  
  input{
    margin-bottom: 20px;
    padding: 20px;
  }
    .pad-bg{
        padding: 20px;
        background-color: #f9f9f9;
  }
    form{
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: 40px auto;
      
        

    }


    .form-group {
        padding: 10px;
    }

    label{
        margin-bottom: 15px;
    }

    .btn{
      margin-top: 20px;
        padding: 15px 40px 15px 40px;
    }
    table{
      
        width:80%; 
        margin: 60px auto; 
    }

    #app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
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

  .changedAvatar{
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

  .changedFileinput{
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }


  .changedFileinput label {
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

</style>