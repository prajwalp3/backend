import express from 'express';
const app=express();
app.get('/', (req, res)=>{
    res.send('server is ready');
});

//get a list of five jokes
app.get('/api/jokes', (req, res)=>{
    const jokes=[
{
id:1,
title:'a joke',
content:'this is a joke'
},
{
    id:2,
title:'a joke',
content:'this is a joke'

},
{
    id:3,
title:'a joke',
content:'this is a joke'

},
{
    id:4,
title:'a joke',
content:'this is a joke'

},
{
    id:5,
title:'a joke',
content:'this is a joke'

}
];


res.send(jokes);
});


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
});