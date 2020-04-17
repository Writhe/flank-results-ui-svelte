<script>
	import Group from './Group.svelte';

	let data = window.resultData;
</script>

<svg style="display: none">
  <defs>
    <symbol id="icon-chevron" viewBox="0 0 24 24">
      <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"></path>
    </symbol>
  </defs>
</svg>

<ul>
	{#each data as group}
	<Group groupData={group} />
	{/each}
</ul>

<style>
	* {
		font-family: Roboto;
	}
	ul {
		list-style: none;
		padding: 0;
	}
</style>