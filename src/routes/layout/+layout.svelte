<script lang="ts">
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .layout {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 1fr;
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

