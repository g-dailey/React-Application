import { useState } from 'react';
import BlogList from './BlogList';



const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: 'May new website', body: "Lorem ipsum...", author: "mario", id: 1},
    {title: 'Welcome party!', body: "Lorem ipsum...", author: "Someone", id: 2},
    {title: 'Web dev tips', body: "Lorem ipsum...", author: "mario", id: 3},
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);

  }

  return (
    <div className="home">
      <BlogList blogs = { blogs } title="All Blogs" handleDelete={handleDelete} />
      </div>

  );
}

export default Home;