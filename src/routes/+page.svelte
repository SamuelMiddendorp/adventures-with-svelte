<script lang="ts">
    import FormField from "../components/formField.svelte";
import {fooData} from "../stores/sampleStore";
    let word: string = "";
    function handle(e: string){
        console.log(e);
    }
</script>
<body>
    <h2>Some data:</h2>
    {#each $fooData as foo}
        <p>{foo}</p>
    {/each}
    <input bind:value={word}> 
    <FormField props={{name: "foo", type: "password", label: "foo:", onValue: handle}}/>
    <button on:click={() => fooData.set([...$fooData, word])}>Add to store</button>
</body>