import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body,  author};

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/')
        })
    }

    return ( <div className="create">
        <h2>New Blog</h2>
        <form>
        <label >Title:</label>
            <input
             type="text"
             required
             value={title}
             onChange= {(e) => setTitle(e.target.value)} />
            <label >Body:</label>
            <textarea 
             required
             value={body}
             onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label >Author:</label>
            <input
             type="text"
             required
             value={author}
             onChange= {(e) => setAuthor(e.target.value)} />
            <button onClick={handleSubmit}>Add Blog</button>
        </form>
    </div> );
}
 
export default Create;