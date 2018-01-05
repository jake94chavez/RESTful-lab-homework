const express = require('express'); //from documentation: express is function
const app = express();//app is an object

const comedians = [
	{id: 1, name: 'Dave Chapelle'},
	{id: 2, name: 'Tom Segura'},
	{id: 3, name: 'John Mulaney'},
	{id: 4, name: 'Nate Bargatze'},
	{id: 5, name: 'Bo Burnham'},
	{id: 6, name: 'Neil Brennan'}
];

app.get('/comedians', (request, response) => {
    response.send(comedians);
});

app.get('/comedians/:id', (request, response) => {
  	for (let i = 0; i < comedians.length; i++) {
  		if (comedians[i].id == request.params.id) {
    		response.send(comedians[i]);
  		}
  	}
  	response.send('Sorry! We don\'t have a page for that link! Try another link!')

 });

const avengers = [
	{id: 1, identity: 'Tony Stark', name: 'Iron Man'},
	{id: 2, identity: 'Thor Odinson', name: 'Thor'},
	{id: 3, identity: 'Hank Pym', name: 'Ant-Man'},
	{id: 4, identity: 'Janey van Dyne', name: 'Wasp'},
	{id: 5, identity: 'Bruce Banner', name: 'Hulk'},
	{id: 6, identity: 'Steven Rogers', name: 'Captain America'},
	{id: 7, identity: 'Black Widow', name: 'Natasha Romanoff'},
	{id: 8, identity: 'Ms. Marvel', name: 'Carol Danvers'},
	{id: 9, identity: 'Spider-Man', name: 'Peter Parker'},
	{id: 10, identity: 'Doctor Strange', name: 'Stephen Strange'},
];

app.get('/avengers', (request, response) => {
    response.send(avengers);
});

app.get('/avengers/:id', (request, response) => {
  	for (let i = 0; i < avengers.length; i++) {
  		if (avengers[i].id == request.params.id) {
    		response.send(avengers[i]);
  		}
  	}
  	response.send('"Sir, it appears we do not have a member of the Avengers associated with that identification request." - JARVIS')

 });

app.get('/', (request, response) => {
    response.send('It looks like you didn\'t search for something we have. Try adding "comedians" or "avengers" to the end of your URL');
});

app.listen(3000, () => {
});