import {writable} from "svelte/store";

const PollSotre = writable([
    {
        id: 1,
        votesA: 9,
        votesB: 15,
        question: 'Python VS JS',
        answer_a: 'Python',
        answer_b: 'JS',
    }
]);

export default PollSotre;