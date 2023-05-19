import { useState, useEffect } from "react";
import "./DiscoverCard.css";
import { Link, useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";

function DiscoverCard({ post }) {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const userRef = ref(db, `users/` + post.uid);

        const offFunction = onValue(userRef, (snapshot) => {
            const currentUser = snapshot.val();
            setUser(currentUser.name);
        })

        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [post]);
    
    return (    
        <div className="discover-content">
            <img className="discover-img" src={post["key-img-src"]} onClick={() => navigate("/artview/" + post.id)} />
            <div className="discover-art-title">{post.title}</div>
            <div className="discover-creator">{user}</div>
            <div className="discover-desc">{post.desc}</div>
            <div className="discover-to-artview-btn" onClick={() => navigate("/gallery/" + post.medium)}>View All {post.medium}</div>
        </div>
    );
}

export default DiscoverCard;