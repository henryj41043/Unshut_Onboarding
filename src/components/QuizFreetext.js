import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from './App';

export default function App() {

    const [ defaultValue, setDefaultValue ] = useState("A DEFAULT VALUE") // This works

    const { register, handleSubmit } = useForm();
    const { handleAnswerButtonClick, handleSelectedAnswers } = useContext(AppContext)

    const onSubmit = data => {
        handleSelectedAnswers(data.freetext);
        handleAnswerButtonClick();
        setDefaultValue("A  << NEW >> DEFAULT VALUE") // Trying to set a defaultValue when ReRendering > THIS DOES NOT WORKS 
    }

    return (
        <form
            className="freetext-container"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <input 
                className="freetext"
                placeholder="type your answer here and press Enter."
                defaultValue={defaultValue}
                {...register("freetext")} 
            />      
        </form>
    );
}
