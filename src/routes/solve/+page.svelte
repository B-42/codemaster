<script>
    import RiddleView from '$lib/components/RiddleView.svelte';
    import { solve } from '$lib/solver+gen.js';
    import StickyFooter from '$lib/components/StickyFooter.svelte';

    let codeLength = 3, riddle, base, solutions, allowDuplicates = true, detailsOpen = false;

    function solveHandler() {
        if(!riddle.length) solutions = undefined;
        else solutions = solve(riddle, base, allowDuplicates);
    }

    const MSG_NO_SOLUTION = "(no solution)";
</script>

<RiddleView contenteditable={true} {codeLength} bind:riddle={riddle} bind:base={base}>
    <div slot="footer">
        <button id="solveButton" on:click={solveHandler}>solve</button>
        <div class="flex center" style="margin-bottom: -1rem;">
            <input type="checkbox" name="duplicates" bind:checked={allowDuplicates}/>
            <label for="duplicates"
            style={`opacity: ${allowDuplicates?100:50}%; font-size: .85rem; user-select: none;`}>
                allow duplicate digits
            </label>
        </div>
        <div class="solutions">
            {#if solutions?.length > 1}
                <details bind:open={detailsOpen} style='max-height: 30vh; overflow-y: auto;'>
                    <summary>{solutions[0] + (detailsOpen ? '' : ' ...')}</summary>
                    {#each solutions.slice(1) as solution}
                        <p>{solution}</p>
                    {/each}                        
                </details>
            {:else if solutions?.length}
                {#each solutions as solution}
                    <p>{solution}</p>
                {/each}
            {:else}
                <p>{MSG_NO_SOLUTION}</p>
            {/if}
        </div>
    </div>
</RiddleView>

<style>
    .solutions {
        margin: 1rem;
    }
    .solutions p {
        margin: none;
    }
    input[type="checkbox"] {
        width: 1rem; height: 1rem;
        margin: .5rem;
    }
</style>