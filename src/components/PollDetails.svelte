<script>
    import Card from "../shared/Card.svelte";
    import PollSotre from "../stores/PollSotre";
    import Button from "../shared/Button.svelte";
    import {tweened} from "svelte/motion"

    export let poll;

    $: totalVote = poll.votesA + poll.votesB;
    $: percenteA = Math.floor(100 / totalVote * poll.votesA) || 0;
    $: percenteB = Math.floor(100 / totalVote * poll.votesB) || 0;

    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percenteA);
    $: tweenedB.set(percenteB);

    const handleVote = (option, id) => {
        PollSotre.update(currentPolls => {
            let copyPolls = [...currentPolls]
            let upvotedPoll = copyPolls.find((poll) => poll.id == id);

            if (option == 'a') {
                upvotedPoll.votesA++;
            }
            if (option == 'b') {
                upvotedPoll.votesB++
            }

            return copyPolls;
        })
    }

    const handleDelete = (id) => {
        PollSotre.update(currentPoll => {
            return currentPoll.filter(poll => poll.id != id);
        })
    }
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total vote: {totalVote}</p>
        <div class="answer" on:click={()=> handleVote('a', poll.id)}>
            <div class="percent answer_a" style="width: {$tweenedA}%;"></div>
            <span>{poll.answer_a} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={()=> handleVote('b', poll.id)}>
            <div class="percent answer_b" style="width: {$tweenedB}%;"></div>
            <span>{poll.answer_b} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button flat="true" inverse="true" on:click={() => handleDelete(poll.id)}>Delete</Button>
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
  .delete {
    margin: 30px;
    text-align: center;
  }
</style>