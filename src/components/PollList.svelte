<script>
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
        <PollDetails {poll} on:vote/>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>