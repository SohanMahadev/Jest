// Import required modules
/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

// Initialize express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas database
mongoose.connect('mongodb+srv://Sohan:Entrix123@cluster0.ztczrpi.mongodb.net/project1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.log(err));

// Define user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  topics: [{
    topic: { type: String, required: true },
    description: { type: String, required: true }
  }]
});

// Define user model
const User = mongoose.model('User', userSchema);


// Define API endpoints
app.post('/signup', async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create new user
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword
    });

    // Save new user
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/signin', async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Check password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Send success response
    res.status(200).json({ message: 'Authentication successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/topic', async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Add new topic
    user.topics.push({
      topic: req.body.topic,
      description: req.body.description
    });

    // Save updated user
    await user.save();

    // Send success response
    res.status(200).json({ message: 'Topic added' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
module.exports= User;*/


// Import required modules
/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

// Initialize express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas database
mongoose.connect('mongodb+srv://Sohan:Entrix123@cluster0.ztczrpi.mongodb.net/project1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.log(err));

// Define user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Define user model
const User = mongoose.model('User', userSchema);

// Define user details schema
const userDetailsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  topic: { type: String, required: true },
  description: { type: String, required: true },
});

// Define user details model
const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

// Define API endpoints
app.post('/signup', async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create new user
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword
    });

    // Save new user
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/signin', async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Check password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Send success response
    res.status(200).json({ message: 'Authentication successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/topic', async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Create new user details
    const newUserDetails = new UserDetails({
      user: user._id,
      topic: req.body.topic,
      description: req.body.description
    });

    // Save new user details
    await newUserDetails.save();

    // Send success response
    res.status(200).json({ message: 'Topic added' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;*/


// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Initialize express app
const app = express();

// Set up middleware
app.use(bodyParser.json());

// Connect to MongoDB Atlas database
mongoose.connect('mongodb+srv://Sohan:Entrix123@cluster0.ztczrpi.mongodb.net/project1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.log(err));

// Define user schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Define user model
const User = mongoose.model('User', userSchema);

// Define user details schema
const userDetailsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  topic: { type: String, required: true },
  description: { type: String, required: true },
});

// Define user details model
const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

// Define API endpoints
app.post('/signup', async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create new user
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword
    });

    // Save new user
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/signin', async (req, res) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Check password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate token
    const token = jwt.sign({ email: user.email }, 'secret');

    // Send success response with token
    res.status(200).json({ message: 'Authentication successful', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/topic', async (req, res) => {
    try {
      // Get token from headers
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
  
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Verify token
      const decodedToken = jwt.verify(token, 'secret');
      if (!decodedToken) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Find user by email
      const user = await User.findOne({ email: decodedToken.email });
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      // Create new user details
      const newUserDetails = new UserDetails({
        user: user._id,
        topic: req.body.topic,
        description: req.body.description
      });
  
      // Save new user details
      await newUserDetails.save();
  
      // Send success response
      res.status(200).json({ message: 'Topic added' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  // Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  module.exports = app;
   




