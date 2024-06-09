<script>
    /** @type {import('./$types').PageData} */
    export let data;
    export let form; 

    let id;
    let url = '' ;
    let quiz ;
    let title = ''; 
    let QuizExists ; 
    

</script>



{#if form?.missing }
<div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
  <strong>Ooops ! </strong> missing fields
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{:else if form?.invalid && !QuizExists}
<div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
  <strong>Ooops!</strong> The ID you provided is invalid  
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

{:else if form?.successfullyCreated}
    <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
      <strong>Wowww!</strong> Successfully created a new essay
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

{:else if form?.successfullyUpdated}
    <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
      <strong>Wowww!</strong>  Successfully updated an essay
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    {:else if form?.successfullyDeleted}
    <div class="alert alert-success alert-dismissible fade show" role="alert" id="alert" style="position: fixed; width:100%; top:0;">
      <strong>Wowww!</strong> Successfully deleted an essay
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>    

{/if}


<main class="container">
   
 

    <section class="form-create">
        <form action="?/create" method="POST" class='pad-bg'>
            <h1 class="text-center">Add Quiz</h1>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="i-box form-control input-lg" name="title" required/>
            </div>
            <div class="form-group">
              <label for="url">Quiz Url</label>
              <input type="text" class="form-control input-lg" name="url" required/>
            </div>
           
            <div class="form-group">
                <button class="btn btn-success btn-lg" type="submit">Create</button>

            </div>
          </form>
    </section>

    <section class="form-update">
        <form action="?/update" method="POST" class='pad-bg'>
            <h1 class="text-center">Update Quiz</h1>
            <div class="form-group">
                <label for="id" >ID</label>
                    <div class="id_search" >
                        <input type="number" class="i-box form-control input-lg idtoUpdate" name="id" min="1" />
                        <button class=" load-btn bg-success text-white" type="button" on:click={
                            ()=>{

                                id = document.querySelector('.id_search .idtoUpdate').value;
                                if(id){
                                    quiz = data.quizzes.find(quiz => quiz.id == id);
                                    console.log(quiz);
                                    if(quiz){
                                        quiz = quiz;
                                        title = quiz.title;
                                        url = quiz.url;
                                    }else{
                                        title = '';
                                        url = '';
                                    }
                                }
                            }
                         }
                        >Load</button>
                    </div>
                </div>

            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="i-box form-control input-lg" name="title" value="{title}"/>
            </div>
            <div class="form-group">
              <label for="url">Quiz Url</label>
              <input type="url" class="form-control input-lg" name="url" value="{url}"/>
            </div>
            

            <div class="form-group">
                <button class="btn btn-success btn-lg">Update</button>

            </div>

          </form>
    </section>

    <section class="form-delete">
        <form action="?/delete" method="POST" class='pad-bg'>
            <h1 class="text-center">Delete Quiz</h1>
            <div class="someshit">
                <div class="form-group" >
                    <label for="id">ID</label>
                        <div class="id_search">
                            <input type="number" class="i-box form-control input-lg idtoDel" name="id" min="number"/>
                            <button class=" load-btn bg-success text-white" type="button" on:click={
                                ()=>{
                                    console.log('clicked')
                                    id = document.querySelector('.id_search .idtoDel').value;
                                    
                                    console.log(id);
                                    if(id){
                                        quiz = data.quizzes.find(quiz => quiz.id == id);
                                        console.log(quiz);
                                        if(quiz){
                                            quiz = quiz;
                                            QuizExists = true;
                                            QuizExists = QuizExists;
                                           
                                        }else{
                                            QuizExists = false;
                                            QuizExists = QuizExists
                                            
                                            


                                            

                                        }
                            }
                            }
                            }>Find</button>

                        </div>
                            <div>
                                {#if QuizExists}
                                <table style="margin-top: 50px;">
                                    
                                    <tr >
                                    <th><button type="submit" class="btn" style="background-color: red; color: white; width:100%; ">Delete</button><input name="id" type="hidden" value={quiz.id} /></th>
                                    <th>content</th>
                                    </tr>
                                    {#each Object.keys(quiz) as key}
                                    <tr>
                                        <td><strong>{key}</strong></td>
                                        {#if key === 'image'}
                                        <td><img  src={quiz[key]} alt="image" style="width: 100px; height: 100px;" /></td>
                                        {:else if key === 'category'}
                                        <td>{quiz[key].map(category => category.name).join(', ')}</td>
                                        {:else}
                                        <td>{quiz[key]}</td>
                                        {/if}
                                    </tr>
                                    {/each}
                                </table>
                                
                                {/if}
                            </div>
                        
                    
                </div>
            </div>
        </form>
    </section>


    <section>
        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Url</th>
            </tr>
            {#each data.quizzes as quiz}
            <tr>
                <td>{quiz.id}</td>
                <td>{quiz.title}</td>
                <td>{quiz.url}</td>
            </tr>
            {/each}
        </table>
    </section>




</main>


<style>
    *{
        padding: 20px;
    }
    .container {
        margin: 2em auto;
      
    }

    section {
        margin: 0 auto;
        margin-bottom: 100px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f9f9f9;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    }
    .id_search {
        padding: 0px !important;
        display: flex;
        justify-content: space-between;
    }

    .btn {
        padding: 10px 20px;
        border-radius: 5px;
        color: white;
        border: none;
        width: 100%;
        
    }

    .load-btn{
        border-radius: 5px;
        color: white;
        border: none;
        width: 20%;
    }

    .someshit{
        display: flex;
        flex-direction: column !important;
        justify-content: space-between;
    }


    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    width:  50%;
    overflow: none;
    padding: 10px;
    border: 1px solid #000;
    overflow-wrap: break-word;
    
  }
</style>