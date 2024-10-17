<script>
    import { onMount } from 'svelte';
    import LinkButton from '$lib/components/LinkButton.svelte';  // Your button component
  
    let buttons = [
      { id: 1, buttonText: 'Github', url: '/' },
      { id: 2, buttonText: 'LinkedIn', url: '/about' },
      { id: 3, buttonText: 'Twitter', url: '/services' },
      { id: 4, buttonText: 'Are.na', url: '/services' },
      { id: 5, buttonText: 'TikTok', url: '/services' },
      { id: 6, buttonText: 'YouTube', url: '/services' },
      { id: 7, buttonText: 'Instagram', url: '/contact' },
      { id: 8, buttonText: 'Letterboxd', url: '/services' },

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
  