const supabase = require('../config/supabaseClient');

exports.signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    console.log('Signup attempt for:', email); 

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email and password are required' 
      });
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username || email.split('@')[0]
        }
      }
    });

    if (error) {
      console.log('Supabase signup error:', error.message);
      return res.status(400).json({ 
        success: false, 
        error: error.message 
      });
    }

    console.log('User created successfully:', data.user?.id);
    res.status(201).json({ 
      success: true,
      message: 'User created successfully', 
      user: {
        id: data.user?.id,
        email: data.user?.email
      }
    });

  } catch (error) {
    console.error('Unexpected signup error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'An unexpected error occurred.' 
    });
  }
};

exports.login = async(req,res) => {
  try {
    const {email , password} = req.body;
    console.log('Login attempt for: ', email);
    if(!email || !password){
      return res.status(400).json({
        success : false,
        error: 'Email and password required'
      });
    }
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) {
      console.log('Login error:', error.message);
      return res.status(401).json({ 
        success: false, 
        error: error.message 
      });
    }

    console.log("Login is successful for: ", data.user?.email);
    res.status(200).json({
      success: true,
      message: 'Login Successful',
      user:{
        id: data.user?.id,
        email: data.user?.email
      },
      token: data.session?.access_token
    });
  } catch (error) {
    console.error('Unexpected login error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'An unexpected error occurred.' 
    });
  }
}