import React, {useEffect, useState} from 'react';
import './App.css';
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
    }[]
}

export interface PostIState {
    posts: {}[];
}

function App() {

    const [posts, setPosts] = useState<PostIState["posts"]>([]);

    const postData = [
        {
            id: 1,
            title: "facebook post",
            like: 120
        },
        {
            id: 2,
            title: "instagram post",
            like: 120
        },
    ];

    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "Shamim Molla",
            age: 27,
            url: "data:image/jpeg;base64,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",
            note: "He is a genius"
        }
    ]);


    useEffect(() => {

        const getPostData = () => {
            setPosts(postData);
        }

        // init call
        getPostData();

        //  interval call
        const interval = setInterval(() => getPostData(), 3000);

        // clear interval while dispose
        return () => clearInterval(interval);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            <h1>People Invited To My Party</h1>
            <div>
                {
                    posts.map((post: any) => <div key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.like}</p>
                    </div>)
                }
            </div>
            <List people={people}/>
            <AddToList people={people} setPeople={setPeople}/>
        </div>
    );
}

export default App;
