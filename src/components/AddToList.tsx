import React, {useState} from 'react';
import {IState as Props} from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (): void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        });
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleInputChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleInputChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image Url"
                className="AddToList-input"
                value={input.url}
                onChange={handleInputChange}
                name="url"
            />
            <textarea
                placeholder="Note"
                className="AddToList-input"
                value={input.note}
                onChange={handleInputChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleSubmit}
            >
                Add To List
            </button>
        </div>
    );
};

export default AddToList;