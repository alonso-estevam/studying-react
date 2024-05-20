import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import blogFetch from "../../axios/config";

const Home = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async() => {
        try {
            const response = await blogFetch.get("posts")
            const data = response.data;
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className="home">            
            <h1>Últimos Posts</h1>
            {/* poderia ser um loader */}
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
                    </div>
                ))
            )}
            
        </div>
    )
}

export default Home;