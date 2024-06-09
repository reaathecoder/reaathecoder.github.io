<script>
    export let inputValue = "";
    </script>
    
    <style>
    /* The search field */
    #searchInput {
        width: 100%;
      box-sizing: border-box;
      font-size: 1.2rem;
      padding: 14px 20px 12px 45px;
      border: none;
      border-bottom: 1px solid #ddd;
    }
    #searchInput:focus {outline: none; }
        
    #search-icon {
        position: absolute;
        left: 20px;
        top: 20px;
        font-size: 1.2rem;
    }	
    </style>
    
    
    <input type="text" placeholder="   Add Categories..." autocomplete="off" id="searchInput" bind:value={inputValue} on:input>
    <span id="search-icon">🔍</span>