<script lang="ts">
    import Nested from "../../components/nested.svelte";

    let counter: number = 0;
    let p: String = "foo";
    $: {
        console.log(counter);
    } 
</script>
<svelte:head>
    <title>Counter</title>
</svelte:head>
<body>
    <Nested bind:person={p} />
    <button on:click={() => counter += 1}>count: {p}</button>
</body>