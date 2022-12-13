const express = require( "express" );
const app = express();
const port = 8080; // default port to listen
let users=[
    {
        name:"Rena",
        surname:"Rustemova",
        age:20
    },
    {
        name:'Rehim',
        surname:'Rustemov',
        age:22
    }
]
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );
app.get('/card', function (req, res) {
    res.send('You send request for card route!');
});
app.get('/client', function (req, res) {
    res.send('You send request for client route!');
});
app.get('/users', function (req, res) {
    res.send(
        users.map((user)=>{
            return user
        })
    );
});
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );