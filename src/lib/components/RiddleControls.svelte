<script>
    export let codeLength, base;
</script>

<div class="controls">
    <div class="flex center space-between">
        <label for="codeLength" style="text-align:left;">code length</label>
        <div class="flex center space-between">
            <input id="codeLength" type="range" name="codeLength" min=3 max=6
            bind:value={codeLength}/>
            <p>{codeLength}</p>
        </div>
    </div>
    <hr>
    <div class="flex center space-between">
        <label for="base">base</label>
        <input id="base" type="number" min=3 max=36 bind:value={base} style="width: 3rem;">
    </div>
</div>

<style>
    .controls {
        /*border: .1rem dashed white;
        border-radius: 1rem;*/
        padding: 1rem;
        width: 70%;
    }
    .controls label {text-align: left; flex-grow: 5;}
    .controls>* {flex-grow: 1;}
</style>