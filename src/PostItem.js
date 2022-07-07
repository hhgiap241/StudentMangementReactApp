import React, {useEffect, useState} from "react";

const PostItem = () => {
    const [posts, setPosts] = useState([])
    const types = ['posts', 'comments', 'albums'];
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => setPosts(posts));
    }, [type])

    return (
        <div>
            {
                types.map(item => {
                    return (
                        <button
                            key={item}
                            style={type === item ? {color: '#fff', backgroundColor: '#333'} : {}}
                            onClick={() => setType(item)}
                        >
                            {item}
                        </button>
                    )
                })
            }
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.title || post.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default PostItem;