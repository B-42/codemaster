<script>
    import { raw2riddle, riddle2raw } from "$lib/utils.js";

    export let options = {import: false, export: false}, riddle,
    onimport = () => {};

    let fileInput, exportAnchor;

    function importRiddle(ev) {
        fileInput.files[0].text()
        .then(data => {
            onimport( raw2riddle(data) );
        });
        fileInput.value = '';
    }

    function exportRiddle(ev) {
        exportAnchor.href="data:text/plain;charset=utf-8," + riddle2raw(riddle);
        exportAnchor.download=new Date().toString();
        exportAnchor.click();
    }
</script>

<div class="bigbox flex center">
    {#if options.import}
    <button on:click={()=>fileInput.click()}>import</button>
    <input style='display: none;'
    bind:this={fileInput} type="file" name="file" id="fileInput"
    on:change={importRiddle}/>
    {/if}

    {#if options.export}
    <button on:click={exportRiddle}>export</button>
    <a bind:this={exportAnchor} style="display: none"></a>
    {/if}
</div>

<style>
    .bigbox {
        width: 70%;
    }
    .bigbox * {
        margin: 1rem 1rem;
        margin-bottom: 0;
    }
</style>