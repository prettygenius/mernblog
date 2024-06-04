import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/posts/${id}`);
      const newPosts = posts.filter((post) => post._id !== id);
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
      setError('Failed to delete post. Please try again later.');
    }
  };

  return (
    <Container className="mt-4">
      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
      <Row>
        {!loading && !error && posts.map((post) => (
          <Col md={4} key={post._id}>
            <Card className="mb-4">
              <div style={{ maxHeight: '300px', overflow: 'hidden' }}>
                <Card.Img variant="top" src={post.image} alt={post.title} />
              </div>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By: {post.author}</Card.Subtitle>
                <Card.Text>
                  {post.content}
                </Card.Text>
                <Link to={`/posts/${post._id}`}>
                  <Button variant="primary" className="mr-2">Read More</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(post._id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;

