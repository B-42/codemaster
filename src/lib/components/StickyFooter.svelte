<script>
    import StickyDiv from "./StickyDiv.svelte";
</script>

<StickyDiv style={'bottom: 0; padding-bottom: 0;'} {...$$props}>
    <slot/>
</StickyDiv>