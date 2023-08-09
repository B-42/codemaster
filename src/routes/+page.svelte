<script>
    import Notes from "$lib/components/Notes.svelte";
    import { window } from '$lib/stores.js';
    import { base } from '$app/paths';
</script>

<div class="flex">
    <img src={base+"/favicon.png"} alt="logo" style="width: 30vw; height: 30vw; margin-top: 1rem;"/>
    <Notes --width='90%'>
        <h1>Codemaster</h1>
        <p>"Crack the Code" puzzle solver & generator.</p>
    </Notes>
</div>
{#if $window.isMobile}
<hr>
<Notes --width='350px'>
    <p></p>
</Notes>
{/if}

<style>
</style>