const express = require('express');
const app= express();
const PORT = 3000;
app.use(express.urlencoded({extended:true}));
//should get files from frontend 
app.use(express.static('frontend'));
//get request 
app.get('/',(req,res) => {res.sendFile(__dirname + '/frontend/order.html');
});
//post request
app.post('/submit',(req,res) => 
{const {item1,item2,item3} = req.body;
//calclate
const total = parseInt(item1) + parseInt(item2) + parseInt(item3);
//sends total
res.send('Total: $${total}');
});
app.listen(PORT,() => {console.log('Server running on http://localhost:${PORT}');
});


