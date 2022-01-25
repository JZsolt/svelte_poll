<script>
    import {createEventDispatcher} from "svelte";
    import Card from "../shared/Card.svelte";

    let dispatch = createEventDispatcher();
    export let poll;

    $: totalVote = poll.votesA + poll.votesB;
    $: percenteA = Math.floor(100 / totalVote * poll.votesA);
    $: percenteB = Math.floor(100 / totalVote * poll.votesB);

    const handleVote = (option, id) => {
        console.log(option + ',' + id)
        dispatch('vote', {option: option, id: id})
    }
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total vote: {totalVote}</p>
        <div class="answer" on:click={()=> handleVote('a', poll.id)}>
            <div class="percent answer_a" style="width: {percenteA}%;"></div>
            <span>{poll.answer_a} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={()=> handleVote('b', poll.id)}>
            <div class="percent answer_b" style="width: {percenteB}%;"></div>
            <span>{poll.answer_b} ({poll.votesB})</span>
        </div>
    </div>
</Card>

<style lang="scss">
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer {
    background: #efefef;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
    transition: .3s ease-in-out;
    border-radius: 8px;

    span {
      display: inline-block;
      padding: 10px 20px;
    }

    &:hover {
      opacity: .6;
    }

    .percent {
      height: 100%;
      position: absolute;
      box-sizing: border-box;

      &.answer_a {
        border-left: 4px solid rgba(217, 27, 66, 0.8);
        background: rgba(217, 27, 66, 0.2);
      }

      &.answer_b {
        border-left: 4px solid rgba(69, 196, 150, 0.8);
        background: rgba(69, 196, 150, 0.2);
      }
    }
  }
</style>