import {useState, useRef} from "react";

export const inputUncontrold = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);


const onInput = (evant: React.FormEvent<HTMLInputElement>) => {
    const input = evant.currentTarget;
    setValue(input.value);
}

    return(

        <>
            <input
                type="text"
                value={value}
                onInput={onInput}
                ref={inputRef}
                placeholder="Enter text here"
            />
        </>
    )

}