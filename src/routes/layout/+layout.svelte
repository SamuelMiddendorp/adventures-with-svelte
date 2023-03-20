<script lang="ts">
</script>

<style>
    :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .layout {
        height: 100vh;
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 1fr;
    }
    .layout > div{
        margin: 0.2em;
        border: 1px solid #888;
        border-radius: 0.4em;
    }
    .nav-top{
        grid-column: 1 / 3;
        grid-row: 1 / 2;
    }
    .app-selector-left{
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    .main-content{
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }

</style>

<body>
    <div class="layout">
        <div class="nav-top">
            <div class="log">
                <h2>Logo!</h2>
            </div>
            <div class="nav-top-left">
                <a href="/">Profile</a>
                <a href="/">Help</a>
                <a href="/">Logout</a>
            </div>
        </div>
        <div class="app-selector-left">
            <a href="/">Agenda</a>
            <a href="/">Make apointment</a>
            <a href="/">Set availability</a>
        </div>
        <div class="main-content">
            <slot/>
        </div>
    </div>
</body>

