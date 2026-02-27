<script>
  
  /**
   * @typedef {Object} Props
   * @property {string | number} [size]
   * @property {string} [color]
   */

  /** @type {Props} */
  let { size = "1em", color = "currentColor" } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 256 256"
  fill="none"
  stroke={color}
  stroke-width="24"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="88" cy="128" r="56" />
  <circle cx="168" cy="128" r="56" />
  <circle cx="128" cy="128" r="56" />
</svg>
