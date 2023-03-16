<script lang="ts">
    import SelfDeletingCard from "../../components/selfDeletingCard.svelte";

    let cards : String[] = ["Foo", "Bar", "Bas", "BasBar", "BarBas"];
    function deleteCard(card: String){
        cards = cards.filter(x => x != card);
    }
</script>
<style>
</style>
<body>
    {#each cards as card}
        <SelfDeletingCard  data={card} deleteCard={deleteCard}/>
    {/each}
</body>