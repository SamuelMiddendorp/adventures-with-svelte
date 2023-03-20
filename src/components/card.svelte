<script lang="ts">
    interface CardProps{
        name: string,
        description: string,
        price: string,
    }
    export let props: CardProps; 
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
    .card
    {
        padding: 1em;
        margin: 1em;
        font-family: 'Josefin Sans', sans-serif;
        display: grid;
        border-radius: 0.2em;
        border: 1px solid #333;
    }
</style>
<div class="card">
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <h2>{props.price}</h2>
</div>