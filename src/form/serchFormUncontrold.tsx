import {useRef} from "react";

interface SearchFormProps {
    onSearch: (searchTerm: string) => void;
}

export const SerchFormUncontrold = ({onSearch}: SearchFormProps) => {


    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const value = inputRef.current?.value;
        if (value) {
            onSearch(value);

            inputRef.current.value = '';
        }

    }
    return <>
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="Search..." ref={inputRef} />
            <button type="submit">Search</button>
        </form>
    </>

}