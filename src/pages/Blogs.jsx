import React, { useEffect, useState } from 'react';
// import {blogs} from "../../public/blog.js"

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => console.error('Error fetching blogs:', err));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Blogs</h1>
            <h3 className="text-lg mb-4">Let's explore some basic concepts</h3>
            
            {blogs.map(({ id, question, answer, date }) => (
                <div key={id} className="mb-6">
                    <p className="font-semibold text-blue-700">{question}</p>
                    <div className="border-t border-dashed border-gray-300 my-3" />
                    <p>Answer: {answer}</p>
                    <div className="border-t border-dashed border-gray-300 my-3" />
                    <p className="text-sm text-gray-500">Added at {date}</p>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
