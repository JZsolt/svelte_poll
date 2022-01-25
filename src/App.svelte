<script>
    import Header from './components/Header.svelte'
    import Footer from "./components/Footer.svelte";
    import Tabs from "./shared/Tabs.svelte";
    import CreateFormPoll from "./components/CreateFormPoll.svelte";
    import PollList from "./components/PollList.svelte";

    //tabs
    let items = ['Current Poll', 'New Poll'];
    let activeItem = 'Current Poll';

    let polls = [
        {
            id: 1,
            votesA: 9,
            votesB: 15,
            question: 'Python VS JS',
            answer_a: 'Python',
            answer_b: 'JS',
        }
    ]

    const tabChange = (e) => {
        activeItem = e.detail
    }

    const handleAdd = (e) => {
        const poll = e.detail;
        polls = [poll, ...polls]
        activeItem = 'Current Poll';
    }

    const handleVote = (e) => {
        const {id, option} = e.detail;
        let copyPolls = [...polls]
        let upvotedPoll = copyPolls.find((poll) => poll.id == id);

        if (option == 'a') {
            upvotedPoll.votesA++;
        }
        if (option == 'b') {
            upvotedPoll.votesB++
        }

        polls = copyPolls;

    }
</script>

<Header/>
<main>
    <h1>Poll</h1>
    <Tabs {activeItem} {items} on:tabChange={tabChange}/>
    <p>
        {#if activeItem === 'Current Poll'}
            <PollList {polls} on:vote={handleVote}/>
        {:else if (activeItem === 'New Poll')}
            <CreateFormPoll on:add={handleAdd}/>
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