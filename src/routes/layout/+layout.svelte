<script lang="ts">
    export let data: {links: string[]};
</script>
<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :global(a) {
        text-decoration: none;
        font-weight: 700;
        color: #333;
    } 
    .layout {
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 1fr;
    }
    .layout > div {
        margin: 0.6em;
        border: 1px solid #888;
        border-radius: 0.4em;
    }
    .nav-top {
        padding: 0.6em;
        margin-bottom: 0 !important;
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        display: grid;
        grid-template-columns: max-content 1fr;
        align-items: center;
    }
    .logo {
        justify-self: start;
    }
    .nav-top-right {
        justify-self: end;
    }
    .nav-top-right a {
        margin-left: 2em;
    }
    .app-selector-left {
        min-width: 3em;
        max-width: 3em;
        margin-right: 0 !important;
        transition: all 0.5s ease-in-out;
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    .app-selector-left a {
        overflow: hidden;
        white-space: nowrap;
        display: block;
        padding: 1em;
        background-color: aquamarine;
    }
    .app-selector-left a span{
        display: none;
    }
    .app-selector-left:hover a span{
        display: inline;
    }
    .app-selector-left:hover{
        min-width: 13em;
        max-width: 13em;
    }
    .main-content {
        padding: 1em;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
</style>
<body>
    <div class="layout">
        <div class="nav-top">
            <div class="logo">
                <h2>Logo!</h2>
            </div>
            <div class="nav-top-right">
                {#each data.links as link}
                <a href="/">{link}</a>
                {/each}
            </div>
        </div>
        <div class="app-selector-left">
            <a href="/"><span class="link-text">Agenda</span>
                    <svg
                        width="3.918741mm"
                        height="4.4204388mm"
                        version="1.1"
                        viewBox="0 0 3.918741 4.4204388"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    >
                        <g transform="translate(-112.94539,-79.432638)">
                            <path
                                d="m113.24539 83.553076 0.90716-1.031173m1.50443-1.758081 0.90715-1.031184m-0.54898 1.913889a1.1103051 1.0866816 0.52400553 0 1-1.1202 1.076485 1.1103051 1.0866816 0.52400553 0 1-1.10032-1.096798 1.1103051 1.0866816 0.52400553 0 1 1.1202-1.076486 1.1103051 1.0866816 0.52400553 0 1 1.10032 1.096799z"
                                fill="none"
                                stroke="#333"
                                stroke-linecap="round"
                                stroke-width=".2"
                            />
                        </g>
                    </svg>
            </a>
            <a href="/"><span class="link-text">Book an appointment</span>
                    <svg
                        width="3.918741mm"
                        height="4.4204388mm"
                        version="1.1"
                        viewBox="0 0 3.918741 4.4204388"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    >
                        <g transform="translate(-112.94539,-79.432638)">
                            <path
                                d="m113.24539 83.553076 0.90716-1.031173m1.50443-1.758081 0.90715-1.031184m-0.54898 1.913889a1.1103051 1.0866816 0.52400553 0 1-1.1202 1.076485 1.1103051 1.0866816 0.52400553 0 1-1.10032-1.096798 1.1103051 1.0866816 0.52400553 0 1 1.1202-1.076486 1.1103051 1.0866816 0.52400553 0 1 1.10032 1.096799z"
                                fill="none"
                                stroke="#333"
                                stroke-linecap="round"
                                stroke-width=".2"
                            />
                        </g>
                    </svg>
            </a>
            <a href="/"><span class="link-text">Add availability</span>
                    <svg
                        width="3.918741mm"
                        height="4.4204388mm"
                        version="1.1"
                        viewBox="0 0 3.918741 4.4204388"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    >
                        <g transform="translate(-112.94539,-79.432638)">
                            <path
                                d="m113.24539 83.553076 0.90716-1.031173m1.50443-1.758081 0.90715-1.031184m-0.54898 1.913889a1.1103051 1.0866816 0.52400553 0 1-1.1202 1.076485 1.1103051 1.0866816 0.52400553 0 1-1.10032-1.096798 1.1103051 1.0866816 0.52400553 0 1 1.1202-1.076486 1.1103051 1.0866816 0.52400553 0 1 1.10032 1.096799z"
                                fill="none"
                                stroke="#333"
                                stroke-linecap="round"
                                stroke-width=".2"
                            />
                        </g>
                    </svg>
            </a>
        </div>
        <div class="main-content">
            <slot />
        </div>
    </div>
</body>

