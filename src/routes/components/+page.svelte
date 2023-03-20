<script lang="ts">
    import Card from "../../components/card.svelte";



</script>
<style>
    .con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, max-content));
    }
</style>
<body>
    <div class="con">
    {#each {length: 10} as _,i}
        <Card props={{name: "Sample", description: "A description about this sample", price: "120"}}/>
    {/each}
    </div>
</body>