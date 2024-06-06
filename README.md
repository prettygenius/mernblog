# MERN BLOG - Fullstack MERN Blog
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Features


-  add/create new blog with image text authors name
-  delete posts
-  Fetch all blogs on homepage from api
-  View individual blog posts 

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/) for backend server/api routes
- [MongoDB/Mongoose](https://www.mongodb.com/) for database
- [React Router](https://reactrouter.com/en/main) for client side routing


## Installation
To get started with this project, follow these steps to set up both the backend and frontend:

### Backend Setup     
    Clone the repository: git clone https://github.com/prettygenius/mernblog
    
   ```bash
    cd devblog
   ```

   Navigate to the backend directory:
   ```bash
    cd backend
   ```

   Install node modules
   ```bash
    npm install
   ```
  
   ```
    Set up your environment variables:
        Create a `.env` file in the `backend` directory with the following content:
        MONGODB_URI=your_mongodb_connection_string
        PORT=5000
   ``` 
 Start the backend server:
   ```bash
    npm start
   ```

   Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```
Install the necessary dependencies:
    
   ```bash
   npm install
   ```


Start the frontend development server:

```bash
npm run dev
```
Once both the backend and frontend servers are running, you can access the application in your web browser at http://localhost:5173.

```bash 
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)
