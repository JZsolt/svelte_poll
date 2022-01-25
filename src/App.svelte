<script>
    import Header from './components/Header.svelte'
    import Footer from "./components/Footer.svelte";
    import Tabs from "./shared/Tabs.svelte";
    import CreateFormPoll from "./components/CreateFormPoll.svelte";

    //tabs
    let items = ['Current Poll', 'New Poll'];
    let activeItem = 'Current Poll';

    const tabChange = (e) => {
        activeItem = e.detail
    }
</script>

<Header/>
<main>
    <h1>Poll</h1>
    <Tabs {activeItem} {items} on:tabChange={tabChange}/>
    <p>
        {#if activeItem === 'Current Poll'}
            Current Poll
        {:else if (activeItem === 'New Poll')}
            <CreateFormPoll/>
        {/if}
    </p>
</main>
<Footer/>

<style>
    h1 {
        text-align: center;
    }
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>