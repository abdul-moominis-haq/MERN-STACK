import express from 'express';

const  resgisterUser = async (req, res) => {
try {   const { username, password, email } = req.body;

// basic validation
if (!username || !password || !email) {
    return res.status(400).json({ message: 'All fields are required' });
}
// check if user already exists

const existing = await User.findOne({ email: email.toLowerCase() });
 if (existing) {
    return res.status(409).json({ message: 'User with this email already exists' });
}

// create new user
const User = new User({
    username,
    password,
    email: email.toLowerCase(),
    loggedIn: false,
});
// await user.save();

return res.status(201).json({ message: 'User registered successfully', User: {id:user._id, email:user.email, username: user.username} });


}
catch (error) {
res.status(500).json({ message: 'internal Server error', error: error.message });
}
}
 export { resgisterUser };