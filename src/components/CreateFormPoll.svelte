<script>
    import {fade} from 'svelte/transition'
    import PollSotre from "../stores/PollSotre";
    import {createEventDispatcher} from "svelte";
    import Button from "../shared/Button.svelte";

    let dispatch = createEventDispatcher ();

    let fields = {
        question: '',
        answer_a: '',
        answer_b: '',
    }
    let errors = {
        question: '',
        answer_a: '',
        answer_b: '',
    }
    let valid = false;

    const submitHeandler = () => {
        valid = true;

        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = 'Tull rovid a kerdes legalabb 5 karakter kell legyen';
        } else {
            errors.question = '';
        }
        if (fields.answer_a.trim().length < 1) {
            valid = false;
            errors.answer_a = 'Nem lehet ures';
        } else {
            errors.answer_a = '';
        }
        if (fields.answer_b.trim().length < 1) {
            valid = false;
            errors.answer_b = 'Nem lehet ures';
        } else {
            errors.answer_b = '';
        }

        if (valid){
            let poll = {... fields, votesA:0, votesB:0, id: Math.floor(Math.random()*100)}
            //save poll ins store
            PollSotre.update(currentPolls => {
                return [poll, ...currentPolls];
            })
            dispatch('add')
        }
    }
</script>

<div class="form" in:fade>
    <form on:submit|preventDefault={submitHeandler}>
        <div class="form-field">
            <label for="question">Poll Question:</label>
            <input type="text" id="question" bind:value={fields.question}>
            {#if (errors.question)}
                <div class="error">{errors.question}</div>
            {/if}
        </div>
        <div class="form-field">
            <label for="answer-a">Answer A:</label>
            <input type="text" id="answer-a" bind:value={fields.answer_a}>
            {#if (errors.answer_a)}
                <div class="error">{errors.answer_a}</div>
            {/if}
        </div>
        <div class="form-field">
            <label for="answer-b">Answer B:</label>
            <input type="text" id="answer-b" bind:value={fields.answer_b}>
            {#if (errors.answer_b)}
                <div class="error">{errors.answer_b}</div>
            {/if}
        </div>
        <Button type="secondary" flat="true" inverse="true">Add Poll</Button>
    </form>
</div>

<style>
    .form {
        background: #f4f4f4;
        border-radius: 8px;
        max-width: 500px;
        margin: auto;
        padding: 20px;
        box-shadow: 2px 2px 5px 0 #c7c4c4;
        text-align: center;
    }

    input {
        display: block;
        border-radius: 8px;
        width: 100%;
    }

    label {
        float: left;
        color: #666666;
        font-weight: bold;
        font-size: 12px;
        margin-left: 10px;
        margin-bottom: 5px;
    }

    .error {
        color: #d61b42;
        font-size: 12px;
        display: block;
        width: 100%;
        text-align: left;
        font-weight: bold;
        margin: -4px 0 15px 10px;
    }
</style>