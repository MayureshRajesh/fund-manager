const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();

app.use(express.json());
const authRoutes = require('./routes/authRoutes');

app.get('/',(req , res)=>{
  res.json({message: 'API is working'});
});
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});