<script lang="ts">
    export let data: String;
    export let deleteCard = (data: String) => {}
</script>
<style>
    .card{
        padding: 1em;
        border-radius: 0.2em;
        border: 1px solid #222;
        width: max-content;
    }
</style>
<body>
    <div class="card">{data}
    <button on:click={() => deleteCard(data)}>remove from list</button>
    </div>
</body>