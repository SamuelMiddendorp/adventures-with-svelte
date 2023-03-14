<script lang="ts">
    import {fooData} from "../stores/sampleStore";
    let word: string = "";
</script>
<body>
    <h2>Some data:</h2>
    {#each $fooData as foo}
        <p>{foo}</p>
    {/each}
    <input bind:value={word}> 
    <button on:click={() => fooData.set([...$fooData, word])}>Add to store</button>
</body>