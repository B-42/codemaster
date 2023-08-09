<script>
</script>

<div class="bigbox flex column center">
    <div style="width: var(--width)">
        <slot/>
    </div>
</div>

<style>
    .bigbox>* {
        width: var(--width);
        text-align: left;
    }
    .bigbox {
        width: 100%;
        height: 100%;
    }
</style>