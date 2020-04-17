<script>
  import Item from './Item.svelte';

  export let groupData;

  let isOpen = false;

  function handleClick(ev) {
    ev.preventDefault();
    isOpen = !isOpen;
  }
</script>


<li class:open={isOpen}>
  <a href="/" on:click={handleClick}>
    <svg><use xlink:href="#icon-chevron"></use></svg>
    <span>
      {groupData.label} ({groupData.items.length})
    </span>
  </a>
  <ul>
    {#each groupData.items as item}
    <Item itemData={item} />
    {/each}
  </ul>
</li>

<style>
  li {
    margin-bottom: 3px;
  }

  ul {
    list-style: none;
    padding-left: 24px;
    display: none;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    display: flex;
    color: inherit;
    text-decoration: none;
    font-weight: 100;
    font-size: 22px;
    padding: 3px 0;
  }

  a:hover {
    background-color: #fafafa;
  }

  svg {
    transition: all .2s ease-in-out;
    flex-basis: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .open > a > svg {
    transform: rotate(90deg);
  }

  .open > ul {
    display: block;
  }

  .open {
    margin-bottom: 10px;
  }
</style>