//@desc Register new User
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

//@desc loginUser User
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}

//@desc Register new User
const getMe = (req, res) => {
    res.json({message: 'User data'})
}

module.exports = { registerUser, loginUser, getMe }