const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
app.use('/', routes); 

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.use("/", function(request,response,next) {
	next();
});

app.use(express.static('public'));




var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};






app.listen(3000)




