import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import BlogDetails from './pages/BlogDetails'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<BlogDetails />} />
        <Route path="/blogs/new" element={<NewPost />} />
        
      </Routes>
    </Router>
  );
}

export default App;

