<script>
</script>

<div class="bigbox flex column center">
    <div style="width: min(calc(100vw - 4rem), var(--width));">
        <slot/>
    </div>
</div>

<style>
    .bigbox>* {
        width: min(calc(100vw - 4rem), var(--width));
        text-align: left;
    }
    .bigbox {
        width: 100%;
        height: 100%;
    }
</style>