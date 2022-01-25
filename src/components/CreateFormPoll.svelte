<script>
    import Button from "../shared/Button.svelte";

    let fields = {
        question: '',
        answer_a: '',
        answer_b: '',
    }
    const submitHeandler = () => {
        console.log(fields)
    }
</script>

<div class="form">
    <form on:submit|preventDefault={submitHeandler}>
        <div class="form-field">
            <label for="question">Poll Question:</label>
            <input type="text" id="question" bind:value={fields.question}>
        </div>
        <div class="form-field">
            <label for="answer-a">Answer A:</label>
            <input type="text" id="answer-a" bind:value={fields.answer_a}>
        </div>
        <div class="form-field">
            <label for="answer-b">Answer B:</label>
            <input type="text" id="answer-b" bind:value={fields.answer_b}>
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
</style>