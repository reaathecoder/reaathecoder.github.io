<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>



<div class="container wrapper">
    <i class="fa-solid fa-gear icon"></i>
    <h1>Not Completed Yet ...</h1>
    <h4 class="text-muted">Come Back Later !</h4>
</div>

<style>
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
        
    }
    h1{
        font-size: 50px;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .icon{
        font-size: 70px;
        animation-name: spin;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear; 
    }

    @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>