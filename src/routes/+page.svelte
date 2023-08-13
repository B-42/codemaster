<script>
    import Notes from "$lib/components/Notes.svelte";
    import { window } from '$lib/stores.js';
    import { base } from '$app/paths';
    import Solve from '$lib/components/Solve.svelte';
    import Generate from '$lib/components/Generate.svelte';

    let mode=0;
</script>

<div class="flex space-between" style="width: 100%;">
    <div class="flex column space-between" style="margin-left: 1rem;">
        <h1 style="margin: 0;">Codemaster</h1>
        <p style="margin: 0; font-size: .85rem;">"Crack the Code" puzzle solver & generator.</p>
    </div>
    <img src={base+"/favicon.png"} alt="logo" style="max-height: 80px;"/>
</div>
<hr>
<div class="flex column center">
    <div class="flex center mode-switch-box">
        <p class:current={mode==0}>solver</p>
        <input bind:value={mode} type="range" min=0 max=1 id="modeSwitch"
        style="flex-grow: 1; width: 10vw; --slider-thumb-width: 50%;"/>
        <p class:current={mode==1}>maker</p>
    </div>
    <div>
        {#if mode == 0}
            <Solve/>
        {:else}
            <Generate/>
        {/if}
    </div>
</div>

<style>
    .mode-switch-box {
        width: 40vmin;
    }
    .mode-switch-box * {
        flex-grow: 1;
        margin: .5rem;
    }
    .mode-switch-box p:not(.current) {
        opacity: 50%;
    }
</style>