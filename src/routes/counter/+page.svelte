<script lang="ts">
    let counter: number = 0;
    $: {
        console.log(counter);
    } 
</script>
<svelte:head>
    <title>Counter</title>
</svelte:head>
<body>
    <button on:click={() => counter += 1}>count: {counter}</button>
</body>