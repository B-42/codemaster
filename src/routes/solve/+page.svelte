<script>
    import RiddleView from '$lib/components/RiddleView.svelte';
    import { solve } from '$lib/solver+gen.js';
    import StickyFooter from '$lib/components/StickyFooter.svelte';

    let codeLength = 3, riddle, base, solutions, allowDuplicates = true;

    function solveHandler() {
        if(!riddle.length) solutions = undefined;
        else solutions = solve(riddle, base, allowDuplicates);
    }
</script>

<h1>solve</h1>

<RiddleView contenteditable={true} {codeLength} bind:riddle={riddle} bind:base={base}></RiddleView>
<StickyFooter>
    <button id="solveButton" on:click={solveHandler}>solve</button>
    <div class="flex center">
        <input type="checkbox" name="duplicates" bind:checked={allowDuplicates}/>
        <label for="duplicates"
        style={`opacity: ${allowDuplicates?100:50}%; font-size: .85rem; user-select: none;`}>
            allow duplicate digits
        </label>
    </div>
    {#if solutions?.length}
        {#each solutions as solution}
            <p>{solution}</p>
        {/each}
    {:else}
    <p>(none)</p>
    {/if}
</StickyFooter>

<style>
    input[type="checkbox"] {
        width: 1rem; height: 1rem;
        margin: .5rem;
    }
</style>