import {surpriseMePrompts} from "../constants/TagConstants";

export const generateTag = (prompt)=>{
    const randomIndex = Math.floor(Math.random()* surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}