<script>
    export let style='', minimizable=false;
    let minimized=false;
    
    function toggleMinimize(ev) {
        minimized = !minimized;
    }
</script>

<div class="sticky flex column center" style={style}>
    <button class={"min-button "+(minimized?'minimized':'')}
    style={`display: ${minimizable?'initial':'none'}`}
    on:click={toggleMinimize}>^</button>
    {#if !minimized}
        <slot/>
    {/if}
</div>

<style>
    .sticky {
        position: sticky;
        padding: 1rem;
        background-color: black;
        border: .1rem dashed white;
        z-index: 10;
    }
    .min-button {
        border: none;
    }
    .min-button:active {
        translate: 0;
        opacity: 50%;
    }
    .min-button.minimized {
        rotate: 180deg;
    }
</style>