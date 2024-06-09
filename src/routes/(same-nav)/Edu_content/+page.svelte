<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { onMount } from 'svelte';
    

    let collapsed = true; 
    let clicked = false;
    let short_content = false;
    let obj 

    console.log(data)


    onMount(()=>{
    

        read_more();


function read_more() {
  var readmore = document.querySelectorAll('.read_more');
  var comments = document.querySelectorAll('.review_comment p');



  comments.forEach(function(comment, i) {
    var commentHeight = comment.clientHeight;
    var scrollCommentHeight = comment.scrollHeight;
    

    if (commentHeight == scrollCommentHeight) {
      short_content = true;
      comment.nextElementSibling.style.display = 'none'; // hide read more button
    } else {
      
    }
  });

  readmore.forEach(function(button) {
    button.addEventListener('click', function(event) {
      if (event.target.tagName.toLowerCase() === 'a'){

      var comment = this.previousElementSibling;
      event.preventDefault();

      comment.classList.toggle('active');

      if (comment.textContent.length < 230) {
        collapsed = true 
      }
      if (comment.classList.contains('active')) {
        collapsed = false 

      } else {
        collapsed = true 

      }
    } 
    });
  });
}
}

);






//copy and sort posts 
let pop_posts = [...data.edu_contents ]
pop_posts.sort((a, b) => b.likes - a.likes)


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

//check if the text is longer than 230 characters
function checkLength(text){
    if(text.length > 230){
        return true
    }else{
        return false
    }
}


function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

  

</script>


    <div class="container-fluid bootstrap snippets bootdey">
        
     
        <div class="row">
            <!-- posts -->


        <div class="col-md-8 over_con">
           
          {#each data.edu_contents as post , index}
            
          
                <div class="panel blog-container" id={post.id}>
                  <div class="panel-body">
                    <div class="image-wrapper">
                      <a class="image-wrapper image-zoom cboxElement" href={post.link}>
                        <img src={post.image} alt="this is an image">
                        <div class="image-overlay"></div> 
                      </a>
                    </div>
                    
                    <div class="panel-header">
                    <h4> {post.title} </h4>
                    <small class="text-muted"><a href={post.link}><strong> Click Here</strong></a> |  Post on {post.createdAt.toDateString().split(' ')[2] + ' ' + new Date().toDateString().split(' ')[1] + ' ' + new Date().toDateString().split(' ')[3]} </small>
                    </div>

                  
                    <div class="review_wrap">
                      <iframe name="votar" style="display:none;"></iframe>

                      <div class="review_comment">

                        <p class="m-top-sm m-bottom-sm text-bottom" class:active={short_content?true:false}>{post.content}</p>

                          
                          <div class="footer-panel read_more" >
                            {#if collapsed}
                                  <a href="#" style="width:90px; "  >Read More</a>
                                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                                <form method="post" action="?/update_likes" target="votar" >
                                  
                                  <button class="post-like text-muted tooltip-test" data-toggle="tooltip" data-original-title="I like this post!"
                                   
                                    on:click={() => {
                                      if (!clicked) {
                                        // i want to be able to add like permanently but now after refresh it will be gone
                                        post.likes += 1;
                                        clicked = true;
                                        obj= {id: post.id, liked: clicked}
                                        
                                      } else {
                                        post.likes -= 1;
                                        clicked = false;
                                        obj= {id: post.id, liked: clicked}

                                      }
                                    }}
                                    aria-label="Like"
                                    type="submit"

                                    style="background:transparent; border:none; cursor:pointer;"
                                  >

                                      <input type="hidden" name="like" id="likes"  value={JSON.stringify(obj)}>
                                    <i class="fa fa-heart"></i> <span class="like-count">{post.likes}</span>
                                  </button>
                                </form>


                            {:else}
                                  <a href="#"  style="width:90px;"  >Read Less</a>
                                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                                  <form method="post" action="?/update" >                                  <span class="post-like text-muted tooltip-test" data-toggle="tooltip" data-original-title="I like this post!"
                                  on:click={()=>{
                                        if(!clicked){
                                    post.likes += 1;
                                    clicked = true;
                                    }else{
                                      post.likes -= 1;
                                      clicked = false;
                                    }

                                  }}>
                                    <i class="fa fa-heart" ></i> <span class="like-count" >{post.likes}</span>
                                  </span>    
                                </form>
                            {/if}
                          </div>

                        </div>
                        
                    </div>
                    
                    
                  <div class="nav tag-cloud">
                    {#each post.category as tag}
                       <!-- content here -->
                       <a href="#">{tag.name}</a>
                      
                    {/each}
                    
                </div>
                {#if short_content}

                <form method="post" action="?/update" >
                          <div style="width: 100%;">
                          <!-- svelte-ignore a11y-click-events-have-key-events -->
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <span class="post-like text-muted tooltip-test" data-toggle="tooltip" data-original-title="I like this post!" 
                          style="float:right; "
                          on:click={() => {
                            if (!clicked) {
                              // i want to be able to add like permanently but now after refresh it will be gone
                              post.likes += 1;
                              clicked = true;
                            } else {
                              post.likes -= 1;
                              clicked = false;
                            }
                          }}
                          aria-label="Like"
                        >
                          
                          <i class="fa fa-heart"></i> <span class="like-count">{post.likes}</span>
                        
                        </span>

                      </div>
                </form>
                          {/if}
            </div>  
            

            </div>      
       
    {/each}
  </div>  
  
  
    <div class="col-md-4 pop-bar">
            
                <div class="side">
                    <div style="display: block; text-align:left; width:80%;">
                        <h4 class="headline text-muted " >
                            POPULAR POSTS
                            <span class="line"></span>
                        </h4>
                    </div>
                
                 
                  {#each pop_posts as post , index}
                      {#if index < 4}

                  <a href="#{post.id}" style="text-decoration: none;">

                      <div class="media popular-post" >
                        <a class="pull-left" href="#">
                          <img src={pop_posts[index].image} alt="Popular Post" style="width: 85px; height:85px;">
                        </a>
                        <div class="media-body" >
                          <h7 style="color: black; text-decoration:underline;">{pop_posts[index].title}</h7>
                          <p  class="text-muted" >{TextAbstract(pop_posts[index].content, 60)}</p>
                          
                        </div>
                      </div>  
                </a>  

                      {/if}
                  
                  {/each}

                 
            
            
                  
              
                
                

                <div class="Cat-bar">
                    <h4 class="headline text-muted">
                        CATEGORIES
                        <span class="line"></span>
                      </h4>
                <div class=" box categories">
                    <ul class="list-unstyled">
                        {#each data.categories as category}
                        <li><a href="#"><i class="fa-solid fa-tag"></i>{category.name}</a></li>
                        {/each}

                        
                    </ul>
                </div>         
            </div>

        </div>
        </div>

            
      </div>
    </div>


    <style>
.review_wrap .review_comment {
	 display: flex;
	 flex-wrap: wrap;
}

 .review_wrap .review_comment p {
	 height: 100px;
	 overflow: hidden;
	 text-overflow: ellipsis;
}
 .review_wrap .review_comment p.active {
	 height: auto;
	 overflow: auto;
}
 .review_wrap .review_comment a {
	 width: 100%;
	 color: #4292f9;
	 font-weight: bold;
}

.Cat-bar{
    width: 80%;
    text-align: left;
}
.side{

    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    
    
}
        .nav{
            margin: 20px;
            margin-top: 40px;
            gap: 5px;
        }


.pop-bar{
    text-align: center;
    display: flex;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  
}
.tag-cloud a {
  padding: 4px 15px;
  font-size: 13px;
  color: #ffffff !important;
  background: rgb(30, 100, 7);
  text-decoration: none;
  border-radius: 3px;
  margin-right: 4px;
  margin-bottom: 4px;
}
.tag-cloud a:hover {
  background: #55a630;
}

.box h3 {
    margin:30px 0 5px;
	font-weight:bold;
}

.box ul {
	margin:0;
}

.box ul li {
	font-size:13px;
	border-bottom:1px dashed #DDDDDD;
	padding:10px 0;
	font-weight:600;
}

.box ul li:last-child {
	border-bottom:0;
}

.box ul li i {
	font-size:18px;
	margin-right:20px;
}

.list-unstyled li a{
    color: #2c7706;

}
.box.categories ul li i {
	color:#BBBBBB;	
	position:relative;
	top:2px;
	width:20px;
}


.over_con{
    margin-top: 30px;
}

.panel {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}

.image-wrapper {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;

}


.image-wrapper img{
    width: 100%;
}

.text-bottom{
    overflow: hidden;
    width: 100%;
    text-align:justify;

}


.panel-header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 20px;

}
.footer-panel{
    display: flex;
    width: 100%;
    justify-content: space-between;
    
}

.footer-panel span{
  width: 50px;
}
.panel-body{
    display: flex;
    width: 80%;
    align-items: center  !important;
    justify-content: center !important;
    flex-direction: column;
    margin-bottom: 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 30px;
}




.blog-container a:not(.btn) {
  color: #999;
  transition: all .2s linear;
  -webkit-transition: all .2s linear;
  -moz-transition: all .2s linear;
  -ms-transition: all .2s linear;
  -o-transition: all .2s linear;
}

.image-wrapper img {
  transition: all .4s ease;
  -webkit-transition: all .4s ease;
  -moz-transition: all .4s ease;
  -ms-transition: all .4s ease;
  -o-transition: all .4s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: .9;
  transition: all .4s ease;
  -webkit-transition: all .4s ease;
  -moz-transition: all .4s ease;
  -ms-transition: all .4s ease;
  -o-transition: all .4s ease;
  transform: translateX(0%);
  -webkit-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -ms-transform: translateX(0%);
  -o-transform: translateX(0%);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #3c8dbc;
  background-image: -moz-linear-gradient(top,#5fa4cc,#3c8dbc);
  background-image: -webkit-linear-gradient(top,#5fa4cc,#3c8dbc);
  background-image: -o-linear-gradient(top,#5fa4cc,#3c8dbc);
  background-image: linear-gradient(to bottom,#5fa4cc,#3c8dbc);
  
  border: 6px solid #296282;
  transition: all .4s ease;
  -webkit-transition: all .4s ease;
  -moz-transition: all .4s ease;
  -ms-transition: all .4s ease;
  -o-transition: all .4s ease;
}

.post-like {
  cursor: pointer;
}

.headline {
  margin: 20px 0;
  padding: 5px 0 10px;
  border-bottom: 1px solid #eee;
  font-weight: 500;
}

h4, .h4 {
  font-size: 18px;
}

.media, .media-body {
  overflow: hidden;

}

.media-body{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;    
}
.media-body p{
    width: 95%;
    text-align: left;
}

.popular-post{
    margin: 5px !important;
    margin-top: 0 !important;
    
}

.side{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    
    gap: 20px;
}
.popular-post{
    display: flex;
    width: 80%;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 30px;
}



@media only screen and (max-width: 768px) {

    .side{
        align-items: center;
    }

}


@media only screen and (max-width: 992px) {

    .pop-bar{
        width: 100%;

        display: flex;
        justify-content: center;
    }

    .side{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

        display: flex;
        align-items: center;
        width: 80%;
    }

    .over_con{
        width: 100%;
    }

}



    </style>