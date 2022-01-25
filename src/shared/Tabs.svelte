<script>
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    export let items;
    export let activeItem;
</script>

<tabs>
    <ul>
        {#each items as item}
            <li class:active={item === activeItem} on:click={() => dispatch('tabChange', item)}>
                <div>
                    {item}
                </div>
            </li>
        {/each}
    </ul>
</tabs>

<style>
    .active {
        color: crimson;
        border-bottom: 3px solid red;
    }
    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li {
        cursor: pointer;
        padding: 10px;
        margin: 0 10px;
    }
</style>