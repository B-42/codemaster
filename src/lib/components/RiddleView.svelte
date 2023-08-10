<script>
    import { writable } from "svelte/store";
    import { window } from "$lib/stores.js";
    import RiddleControls from "./RiddleControls.svelte";
    import RiddleFileHandler from "./RiddleFileHandler.svelte";
    import RiddleNumber from "./RiddleNumber.svelte";
    import StickyHeader from "./StickyHeader.svelte";
    import StickyFooter from "./StickyFooter.svelte";

    export let codeLength = 3,
    riddle,
    contenteditable=false,
    base = 10,
    showControls=false,
    fileSettings;

    const CE_FILE_SETTINGS = {import: true, export: true};

    const riddleStore = writable(
        contenteditable ?
        riddle || [{
            code: Array.from({length: codeLength},()=>0),
            included: 0,
            sorted: 0
        }]
        : riddle
    );

    $: {
        if(contenteditable) {
            
            riddleStore.update(hints => riddle)

            riddleStore.update(hints => hints?.map(hint => {
                while(hint.code.length != codeLength) {
                    if(hint.code.length > codeLength) hint.code.pop()
                    else hint.code.push(0)
                }
                return hint;
            }))

        }
    }

    function add() {
        const blankRow = {
            code: Array.from({length: codeLength}, ()=>0),
            included: 0,
            sorted: 0
        };
        riddleStore.update(hints=>hints.concat(blankRow));
    }

    function handleImport(riddleImport) {
        codeLength = riddleImport[0].code.length;
        riddleStore.set(riddleImport);
    }

    riddleStore.subscribe(value => riddle = value);

    let isMobile = false;
    window.subscribe(props => {
        isMobile = props.isMobile;
    });
</script>

<div class="bigbox flex column center">
    <StickyHeader minimizable={true}>
        {#if isMobile}
        <div class="mobile-inst-box">
            <div class="flex center mobile-inst space-between"><p>incl</p><p>=</p><p class="included">included</p></div>
            <div class="flex center mobile-inst space-between"><p>sort</p><p>=</p><p class="sorted">sorted</p></div>
        </div>
        {/if}
        {#if contenteditable || fileSettings}
            <RiddleFileHandler options={contenteditable ? CE_FILE_SETTINGS : fileSettings}
            bind:riddle={riddle}
            onimport={handleImport}/>
        {/if}
        {#if showControls || contenteditable}
            <RiddleControls bind:codeLength={codeLength} bind:base={base}/>
        {/if}
        {#if $$slots.header}
            <slot name="header"></slot>
        {/if}
    </StickyHeader>
    <div style="margin: 1rem;">
    </div>
    {#each riddle??[] as hint,i}
        <div class="hint flex center" style="align-items: flex-start;">
            <div class="code">
                {#each hint.code as digit}
                    <RiddleNumber bind:value={digit} max={base-1} disabled={!contenteditable}/>
                {/each}
            </div>
            <div class="flex">
                <div class="flex column">
                    <div class="included">
                        <RiddleNumber disabled={!contenteditable} max={codeLength} bind:value={hint.included}/>
                    </div>
                    <label for="included">{isMobile?"incl":"included"}</label>
                </div>
                
                <div class="flex column">
                    <div class="sorted">
                        <RiddleNumber disabled={!contenteditable} max={hint.included} bind:value={hint.sorted}/>
                    </div>
                    <label for="sorted">{isMobile?"sort":"sorted"}</label>
                </div>
            </div>
            {#if contenteditable}
            <button class="delete-button" on:click={() => {riddleStore.update(hints=>riddle.filter((e,j)=>j!=i))}}>
                x
            </button>
            {/if}
        </div>
    {/each}
    {#if contenteditable}
        <button id="addButton" style="margin: 1.5rem; padding: .2rem 1rem;"
        on:click={add}>
            +
        </button>
    {/if}
    {#if $$slots.footer}
        <StickyFooter>
            <slot name="footer"/>
        </StickyFooter>
    {/if}
</div>

<style>
    .bigbox {
        width: 100%;
        margin-bottom: var(--toolbar-height);
    }
    .hint>* {
        margin: .4rem;
    }

    .mobile-inst-box {width: 50%; margin-top: 1rem;}
    .mobile-inst {height: 1rem;}

    .delete-button {translate: 0 2rem;}

    .included {border-color: orange !important; color: orange;}
    .sorted {border-color: limegreen !important; color: limegreen;}
    
    @media only screen and (max-width: 750px) {
        .delete-button {
            translate: 0 .7rem;
        }
    }
</style>