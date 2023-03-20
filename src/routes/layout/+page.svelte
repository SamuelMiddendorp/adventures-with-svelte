<script>
</script>
<style>
    .card-collection{
        display: grid;
        grid-template-columns: repeat(3, max-content);
        grid-template-rows: min-content;
    }
    .card{
        display: grid;
        align-content: center;
        justify-content: center;
        padding: 0.4em;
        margin-right: 0.4em;
        border-radius: 0.2em;
        opacity: 0.5;
        height: 10em;
        box-shadow: 2px 2px 20px #888888;
        width: 15em;
    }
</style>
<body>
    <h1>Here is the title of the page</h1>
    <h2>And some text explaining what to do</h2>
    <h3>Subtitle</h3>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
        perferendis a vitae voluptatum architecto aspernatur totam, omnis
        recusandae nostrum facere ipsa saepe ex, quae esse libero veritatis
        velit magni ducimus!
    </p>
    <div class="card-collection">
        <div class="card">
            <h1>A card!</h1>
        </div>
        <div class="card">
            <h1>A card!</h1>
        </div>
        <div class="card">
            <h1>A card!</h1>
        </div>
    </div>
</body>
