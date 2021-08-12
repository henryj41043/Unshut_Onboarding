import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from './App';

export default function App() {

    const [ defaultValue, setDefaultValue ] = useState("")

    const { register, handleSubmit } = useForm();
    const { handleAnswerButtonClick, handleSelectedAnswers } = useContext(AppContext)

    const onSubmit = data => {
        handleSelectedAnswers(data.freetext);
        handleAnswerButtonClick();
        setDefaultValue("B")
    }

    return (
        <form
            className="freetext-container"
            onSubmit={handleSubmit(onSubmit)}
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
