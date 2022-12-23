import { Anwser } from "../../types/Anwser";
import {decode} from 'html-entities';

const anwserMock: Anwser[] = [{
    "category": "Celebrities",
    "type": "multiple", "difficulty": "medium",
    "question": "What is Doug Walker&#039;s YouTube name?",
    "correct_answer": "The Nostalgia Critic",
    "incorrect_answers": ["The Angry Video Game Nerd", "AngryJoeShow", "The Cinema Snob"]
}, { "category": "General Knowledge", "type": "multiple", "difficulty": "medium", "question": "Scotch whisky and Drambuie make up which cocktail?", "correct_answer": "Rusty Nail", "incorrect_answers": ["Screwdriver", "Sex on the Beach", "Manhattan"] }, { "category": "Science & Nature", "type": "multiple", "difficulty": "easy", "question": "What is the powerhouse of the cell?", "correct_answer": "Mitochondria", "incorrect_answers": ["Ribosome", "Redbull", "Nucleus"] }, { "category": "History", "type": "multiple", "difficulty": "medium", "question": "Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?", "correct_answer": "Assyrians", "incorrect_answers": ["Babylonians", "Hittites", "Elamites"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Who won the 2015 Formula 1 World Championship?", "correct_answer": "Lewis Hamilton", "incorrect_answers": ["Nico Rosberg", "Sebastian Vettel", "Jenson Button"] }, { "category": "Geography", "type": "boolean", "difficulty": "easy", "question": "There are no deserts in Europe.", "correct_answer": "True", "incorrect_answers": ["False"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "medium", "question": "Which &quot;Green Arrow&quot; sidekick commonly wears a baseball cap?", "correct_answer": "Roy Harper", "incorrect_answers": ["Black Canary", "Emiko Queen", "Dick Grayson"] }, { "category": "Entertainment: Board Games", "type": "multiple", "difficulty": "hard", "question": "In Magic: The Gathering, what term for blocking was established in the Portal set?", "correct_answer": "Intercepting", "incorrect_answers": ["Blocking", "Resisting", "Shielding"] }, { "category": "Entertainment: Music", "type": "multiple", "difficulty": "easy", "question": "The Rush song &quot;YYZ&quot; derives its name from the IATA aiport identification code for which city?", "correct_answer": "Toronto", "incorrect_answers": ["Vancouver", "Ottawa", "Calgary"] }, { "category": "History", "type": "multiple", "difficulty": "easy", "question": "Abolitionist John Brown raided the arsenal in which Virginia Town?", "correct_answer": "Harper&#039;s Ferry", "incorrect_answers": ["Richmond", "Harrisonburg", "Martinsburg"] }]


export const api = {
    data: async (): Promise<Anwser[]> => {
        return anwserMock.map((question)=>{
            return {
                ...question,question:decode(question.question),correct_answer:decode(question.correct_answer)
            }
        })
    }
}