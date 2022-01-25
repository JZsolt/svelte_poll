<script>
    import {fade, slide, scale} from 'svelte/transition'
    import {flip} from 'svelte/animate'
    import PollSotre from "../stores/PollSotre";
    import PollDetails from "./PollDetails.svelte";
    // import {onDestroy, onMount} from "svelte";

    // export let polls;

    // const unsub = PollSotre.subscribe((data) => {
    //     polls = data
    // })
    //
    // onDestroy(()=> {
    //     unsub();
    //     console.log('onDestroy')
    // })
</script>

<div class="poll-list">
    {#each $PollSotre as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails {poll}/>
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>