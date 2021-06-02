import {useEffect, useState} from "react";
import axios from "axios";

export const usePosts = () => {
    const [posts, setPosts] = useState<string[]>([])
    useEffect(() => {
        axios.get('/api/v1/posts').then((response) => {
            setPosts(response.data);
        })
    }, []);
    return { posts, setPosts }
}