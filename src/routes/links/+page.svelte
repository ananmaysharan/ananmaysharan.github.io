<script>
    import { onMount } from 'svelte';
    import LinkButton from '$lib/components/LinkButton.svelte';  // Your button component
  
    let buttons = [
      { id: 1, buttonText: 'Github', url: '/' },
      { id: 2, buttonText: 'LinkedIn', url: '/' },
      { id: 3, buttonText: 'Twitter', url: '/' },
      { id: 4, buttonText: 'Are.na', url: '/' },
      { id: 5, buttonText: 'TikTok', url: '/' },
      { id: 6, buttonText: 'YouTube', url: '/' },
      { id: 7, buttonText: 'Instagram', url: '/' },
      { id: 8, buttonText: 'Letterboxd', url: '/' },

    ];
  

  </script>
  
<div id="button-grid">
    {#each buttons as button (button.id)}
      <div id="button-{button.id}">
        <LinkButton url={button.url} buttonText={button.buttonText} />
      </div>
    {/each}
</div>    
  
  <style>

    #button-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
        padding: 2em;
    }


  </style>
  