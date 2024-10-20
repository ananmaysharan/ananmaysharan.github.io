<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import LinkButton from '$lib/components/LinkButton.svelte';
  import pkg from 'matter-js';
  const {Engine, Runner, World, Bodies, Composite, Mouse, MouseConstraint, Body, Events, Render} = pkg;
  
  let buttons = [
    { id: 1, buttonText: 'Github', url: '/', color: 'github'  },
    { id: 2, buttonText: 'LinkedIn', url: '/', color: 'linkedin'  },
    { id: 3, buttonText: 'Twitter', url: '/', color: 'twitter' },
    { id: 4, buttonText: 'Are.na', url: '/', color: 'arena'},
    { id: 5, buttonText: 'TikTok', url: '/', color: 'tiktok'},
    { id: 6, buttonText: 'YouTube', url: '/', color: 'youtube' },
    { id: 7, buttonText: 'Instagram', url: '/',  color: 'instagram' },
    { id: 8, buttonText: 'Letterboxd', url: '/', color: 'letterboxd'},
  ];
  
  let containerDiv;
let buttonElements = [];
let engine;
let render;
let runner;
let physicsButtons = [];

onMount(() => {
  setTimeout(() => {
    initPhysics();
  }, 0);

  function initPhysics() {
    // Create engine
    engine = Engine.create({
      enableSleeping: true
    });

    const containerBounds = containerDiv.getBoundingClientRect();
    const containerWidth = containerBounds.width;
    const containerHeight = containerBounds.height || window.innerHeight;

    // Create renderer
    render = Render.create({
      element: containerDiv,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    // Create runner
    runner = Runner.create();

    // Create walls
    const wallOptions = {
      isStatic: true,
      render: { visible: false }
    };

    const walls = [
      Bodies.rectangle(containerWidth / 2, containerHeight - 10, containerWidth, 20, wallOptions), // floor
      Bodies.rectangle(0, containerHeight / 2, 20, containerHeight, wallOptions), // left wall
      Bodies.rectangle(containerWidth, containerHeight / 2, 20, containerHeight, wallOptions), // right wall
    ];

    Composite.add(engine.world, walls);

    // Create physics bodies for buttons
    buttonElements.forEach((buttonEl, index) => {
      if (!buttonEl) return;

      const buttonBounds = buttonEl.getBoundingClientRect();
      
      const buttonBody = Bodies.rectangle(
        Math.random() * (containerWidth - buttonBounds.width) + buttonBounds.width/2,  // Random X position
        -50 - (index * 50),  // Staggered Y positions above viewport
        buttonBounds.width + 10,
        buttonBounds.height + 10,
        {
          restitution: 0.6,
          friction: 0.8,
          density: 0.001,
          label: `button-${index}`
        }
      );

      physicsButtons.push(buttonBody);
      Composite.add(engine.world, buttonBody);
    });

    // Start the simulation
    Render.run(render);
    Runner.run(runner, engine);

    // Animation loop for button positions
    function updateButtonPositions() {
      buttonElements.forEach((buttonEl, index) => {
        if (!buttonEl || !physicsButtons[index]) return;
        
        const body = physicsButtons[index];
        const x = body.position.x - buttonEl.offsetWidth/2;
        const y = body.position.y - buttonEl.offsetHeight/2;
        const rotation = body.angle * (180 / Math.PI);
        
        buttonEl.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      });
      requestAnimationFrame(updateButtonPositions);
    }

    updateButtonPositions();
  }

  return () => {
    if (render) Render.stop(render);
    if (runner) Runner.stop(runner);
    if (engine) {
      World.clear(engine.world);
      Engine.clear(engine);
    }
  };
});
</script>

<div id="physics-container" bind:this={containerDiv}>
  <div id="button-grid">
    {#each buttons as button (button.id)}
      <div 
        id="button-{button.id}" 
        class="button-wrapper"
        bind:this={buttonElements[button.id - 1]}
      >
        <LinkButton url={button.url} buttonText={button.buttonText} color={button.color} />
      </div>
    {/each}
  </div>
</div>

<style>
  #physics-container {
    width: 100%;
    height: 90vh;
    overflow: hidden;
    position: relative;
    touch-action: none;
  }

  #button-grid {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .button-wrapper {
    position: absolute;
    cursor: pointer;
    transition: transform 0.016s linear;
    will-change: transform;
    z-index: 1;
    user-select: none;
  }
</style>