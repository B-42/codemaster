<div class="sticky-footer flex column center">
    <slot/>
</div>

<style>
    .sticky-footer {
        position: sticky;
        bottom: 0;
        background-color: black;
        padding: 1rem;
        border: .1rem dashed white;
    }
</style>