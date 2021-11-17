const express = require('express');
const app = express();
const useRoute = require('./routes/users');
const bp = require('body-parser');
const cors = require('cors');



app.use(bp.json());
app.use(useRoute);
app.use(cors());





app.listen(3000,()=>{
    console.log('server started');
});