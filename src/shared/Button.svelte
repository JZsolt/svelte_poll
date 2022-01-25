<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<button class="{type}" class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 8px;
        padding: 8px 14px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
    }
    .primary {
        background: #d61b42;
        color: white;
    }
    .secondary{
        background: #45c495;
        color: white;
    }
    .flat {
        box-shadow: none;
        border: 1px solid rgba(0, 0, 0, .2);
    }
    .primary.inverse {
        background: white;
        color: #d61b42;
        border: 2px solid #d61b42;
    }
    .secondary{
        background: white;
        color: #45c495;
        border: 2px solid #45c495;
    }
</style>