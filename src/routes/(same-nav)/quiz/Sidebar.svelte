<script context="module">
	export let openSidebar = () => {};
	export let closeSidebar = () => {};
</script>
<script>
	import {onMount, onDestroy} from 'svelte'
	import {writable} from 'svelte/store';
	
	export let maxWidth = 300;
	export let showVeil = true;
	export let disableDrag = false;
	
	let isOpen = false;
	let sidebar = null;
	let handle = null;
	let isDragging = false;
	let translateX = 0;
	let movementThrow = 0;
	let veilOpacity = 0;
	
	$: canInteract = !disableDrag && isDragging;
	
	
		
	onMount(() => {
		sidebar = document.querySelector('#sidebar');
		handle =  document.querySelector('#handle');
		
		// desktop handlers
		handle.addEventListener('mousedown', handleInteract);
		document.addEventListener('mouseup', handleLetGo);
		document.addEventListener('mousemove', handleDesktopMove);
		
		// mobile handlers
		handle.addEventListener('touchstart', handleInteract);
		document.addEventListener('touchmove', handleMobileMove);
		document.addEventListener('touchend', handleLetGo);
	
	onDestroy(() => {
		// desktop handlers
		handle.removeEventListener('mousedown', handleInteract);
		handle.removeEventListener('touchstart', handleInteract);

		

		
			document.removeEventListener('mouseup', handleLetGo);
			document.removeEventListener('mousemove', handleDesktopMove);
			
			// mobile handlers
			document.removeEventListener('touchmove', handleMobileMove);
			document.removeEventListener('touchend', handleLetGo);

	});
	

});


function handleInteract() {
		isDragging = true;
	}
	function handleLetGo() {
			if (canInteract) {
				isDragging = false;
				if (movementThrow > 8) {
					open();
					return;
				} else if (movementThrow < -8) {
					close();
					return;
				}
				if (translateX > (maxWidth / 2)){
					open();
				} else {
					close();
				}
			}
	}

	function handleDesktopMove(event) {
		if (canInteract) {
			const {x, movementX} = event;
			movement({ x, movementX });
		}
	}
	
	function handleMobileMove(event) {
		if (canInteract) {
			const touch = Array.from(event.touches)[0];
			if (touch) {
				movement({ x: Math.round(touch.clientX), movementX: 0 });
			}
		}
	}
	function movement({x, movementX}) {				
		movementThrow = movementX;

		if (x <= maxWidth && x >= 0) {
			translateX = x;
			veilOpacity = x / maxWidth;
		} else if (x > maxWidth) {
			open();
		} else {
			close();
		}
	}
	

	
function open() {
		translateX = maxWidth;
		veilOpacity = 1;
		isOpen = true;
	}
function close() {
		translateX = 0;
		veilOpacity = 0;
		isOpen = false;
	}

openSidebar = open;
closeSidebar = close;

</script>

<div id="sidebar" class="sidebar" style="max-width: {maxWidth}px; transform: translate3d({translateX - maxWidth}px, 0, 0);{isDragging ? "transition: none" : ""}">
	<slot></slot>
</div>
<div id="handle" class="sidebarHandle" style="transform: translate3d({translateX}px, 0, 0);{isDragging ? "transition: none" : ""}"><slot name="handle"></slot></div>

<slot name="veil">
{#if showVeil}
	<div class:hideVeil={veilOpacity === 0} on:click={closeSidebar} />
{/if}
</slot>

<style>
	.sidebar {
		margin-top: 100px;
		width: 100%;
		max-width: 95%;
		height: 100vh;
		overflow: auto;
		background: white;
		position: fixed; 
		top: 0;
		left: 0;
		transform: translate3d(-100%, 0, 0);
		transition: transform .1s ease;
		z-index: 0;
	}
	.sidebarHandle {
		width: 64px; 
		height: 100vh;
		background: transparent;
		position: fixed; 
		top: 0;
		left: -32px;
		transition: transform .1s ease;
		z-index: 100;
		cursor: grab;
	}
	.veil {
		z-index: 98;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		transition: opacity .2s ease;											
	}
	.hideVeil {
		opacity: 0;
		pointer-events: none;
	}
</style>