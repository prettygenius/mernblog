import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"; 
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Check if MONGODB_URI is defined
if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined in environment variables");
    process.exit(1);
}

// Connect to DB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("Error connecting to DB:", err.message);
        process.exit(1);
    });

// Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
});

// Model
const Post = mongoose.model("Post", postSchema);

// Routes
app.get("/posts", async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

app.get("/posts/:id", async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        next(error);
    }
});

app.post("/posts", async (req, res, next) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        next(error);
    }
});

app.put("/posts/:id", async (req, res, next) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        next(error);
    }
});

app.delete("/posts/:id", async (req, res, next) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: "An error occurred. Please try again later." });
});

app.listen(port, () => console.log(`Server started on ${port}`));

