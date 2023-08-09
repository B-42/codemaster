<script>
    export let value, disabled, max;
</script>

<input class={$$props.class} on:focus={ev=>ev.target.select()}
disabled={disabled} type="number" min=0 max={max} bind:value={value}/>

<style>
    input {
        border: .1rem solid;
        color: inherit;
        border-color: inherit;
        border-radius: .5rem;
        width: 5rem; height: 5rem;
        font-size: 3rem;
        text-align: center;
        margin: .25rem;
    }

    @media only screen and (max-width: 750px) {
        input {
            font-size: 1.5rem;
            width: 2.5rem; height: 2.5rem;
        }
    }
</style>