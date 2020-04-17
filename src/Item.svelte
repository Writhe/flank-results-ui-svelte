<script>
  export let itemData;
</script>

<li>
  <a target="_blank" href="{itemData.url}">{itemData.label}</a>
</li>

<style>
  li {
    margin-top: 5px;
  }

  a {
    color: deepskyblue;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>