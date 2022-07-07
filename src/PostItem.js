import React, {useEffect, useState} from "react";

const PostItem = () => {
    const [posts, setPosts] = useState([])
    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts));
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default PostItem;