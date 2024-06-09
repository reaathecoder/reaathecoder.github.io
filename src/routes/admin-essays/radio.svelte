
<script>
    export let group = undefined;
      export let value = undefined;
      export let name = "";
      export let id = "";
  </script>
  <label>
    <input type="radio" bind:group value={value} class="my-super-special-classname"  name={name} id={id}  />
      <slot />
  </label>
  
  