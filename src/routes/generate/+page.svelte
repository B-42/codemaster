<script>
    import RiddleControls from "$lib/components/RiddleControls.svelte";
    import RiddleView from "$lib/components/RiddleView.svelte";
    import {generateRiddle, generateRiddleMulti} from '$lib/solver+gen.js';
    import StickyFooter from "$lib/components/StickyFooter.svelte";

    let resultObj={}, codeLength=3, base=10, riddle;

    function handleGenerate() {
        generateRiddleMulti({
            codeLength,
            base
        }, 16, resultObj, () => {resultObj = resultObj});
    }
</script>
<h1>generate</h1>
<RiddleView showControls={true} fileSettings={{import:false, export:true}} bind:codeLength={codeLength} bind:base={base} bind:riddle={resultObj.riddle}>
    <button on:click={handleGenerate}>generate</button>
</RiddleView>