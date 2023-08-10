<script>
    import StickyDiv from "./StickyDiv.svelte";
</script>

<StickyDiv style='top: 0; padding-top: 0; background-color: black;' {...$$props}>
    <slot/>
</StickyDiv>