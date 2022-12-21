export interface Anwser{
    category : string
    type: "boolean"  | "multiple"
    question:string
    difficulty:string
    correct_answer:string
    incorrect_answers:string[]
}

