<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />



<script>
	import { onMount } from "svelte";
	import Sidebar, { openSidebar, closeSidebar } from './Sidebar.svelte';
	

	 let quizList = [
		{text : "Quiz 1" , url: "https://docs.google.com/forms/d/e/1FAIpQLScIv4NbQEuXXbctpZcf3rTbyqw15Jdp37yzeGrfOJLng_p7iw/viewform?usp=sf_link" , setActive : true },
		{text : "Quiz 2" , url: "https://docs.google.com/forms/d/1vzB_TGG9Zoe6QKzBof7AoMukHHilkTxFeXoCsDb5294/viewform?edit_embedded=true" , setActive : false},
		{text : "Quiz 3" , url: "https://forms.gle/gi3rSJ6gMY4P6DkK6" , setActive : false}
		]


	let url = quizList[0].url;

	
	function OpenQuiz( i) {
		for (let button in quizList){
			console.log(button)
			if (quizList[button].setActive){
				quizList[button].setActive = false;
			}
		}
		quizList[i].setActive = true;
		url = quizList[i].url
		url = url


	}

    $: innerWidth = 0
	$: outerWidth = 0
	$: innerHeight = 0
	$: outerHeight = 0


	
	$: showDesktopSidebar = innerWidth > 790;



onMount(()=>{
		

	console.log(innerHeight, innerWidth , showDesktopSidebar)

	window.addEventListener('resize', (event) => {
		const width = event.srcElement.innerWidth;

		console.log(innerHeight, innerWidth , showDesktopSidebar , width)


		if (!showDesktopSidebar) {
			openSidebar();
		} else {
			closeSidebar();
		}
	});

	console.log(innerHeight, innerWidth , showDesktopSidebar)

	})


</script>



<!--
	<Sidebar disableDrag={true} showVeil={false}>
					<div slot="handle" class="customHandle" on:click={closeSidebar}>
						<span aria-label="drawer handle">||</span>
					</div>
					{#each quizList as button , i }
					<button type="button" style="height: 60px;" class="list-group-item list-group-item-action " on:click={()=>{OpenQuiz(i)}}>{button.text}</button>
					{/each}
					
				 </Sidebar>	

<h1 on:click={openSidebar}>
	Sliding Sidebar
</h1>

-->



<div class="text-column">
	<div  class:text={showDesktopSidebar}  class:onPhone={!showDesktopSidebar}>
		<div class="list-group" >
		

			{#each quizList as button , i }
			<button type="button" style="height: 60px; color:darkgreen; border-bottom: 1px solid rgb(162, 226, 162); " class:active={button.setActive} class="list-group-item list-group-item-action " on:click={()=>{OpenQuiz(i)}}>{button.text}</button>
			{/each}
			
		  </div>

	</div>
	<div class:quiz-part={showDesktopSidebar}  class:onPhoneQuiz={!showDesktopSidebar}>
		<iframe  class="quiz" src={url}  frameborder="3">Läser in …</iframe>
	</div>


	<div class:onDesktop={showDesktopSidebar} >
		<Sidebar disableDrag={false} showVeil={false} >
			<div slot="handle" class="customHandle">
				<span aria-label="drawer handle"  >||</span>
			</div>
			<div class="list-group" >
				{#each quizList as button , i }
				<button type="button"  style="height: 60px; color:darkgreen; border-bottom: 1px solid rgb(162, 226, 162); "  class:active={button.setActive} class="list-group-item list-group-item-action "  on:click={()=>{OpenQuiz(i)}}>{button.text}</button>
				{/each}
			</div>
		</Sidebar>
	</div>
	
</div>



<style>

	
	.text-column{

		display: flex;
		


	}

	.title{
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: darkgreen;
		color: azure;
	}

	.quiz-part{
		width: 80%;
		height: 100vh;

	}
	.onPhoneQuiz{
		width: 100%;
		height: 100vh;

	}

	.quiz{
		width:100%;
		height: 100%;
		
	}
	.text{
		width: 20%;
		overflow: scroll;
	}

	.onPhone{
		display: none;
	}

	.onDesktop{
		display: none;
	}

	.list-group-item:focus{
		background-color: rgb(50, 190, 73);
		color: white !important;
		border: none;
	}
	
	.active{
		background-color: rgb(50, 190, 73);
		color: white !important;
		border: none;
	}



	.desktopSidebar {
		padding-left: 300px;
	}
	.customHandle {
		position: relative;
		width: 16px;
		height: 100%;
		left: 55%;
		display: flex;
		align-items: center;
		pointer-events: none;
	}

</style>