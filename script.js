const movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 3,
		title: 'Wielkie piękno',
		desc: 'Trzeba zobaczyć, żeby wiedzieć',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 4,
		title: 'Paterson',
		desc: 'Film o kierowcy autobusu i poecie',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	},
	{
		id: 5,
		title: 'Lady Bird',
		desc: 'Jutro się dowiem :)',
		pic: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
	}
];

var Movie = React.createClass({

	propTypes: {
    	movies: React.PropTypes.object.isRequired,
	},

	render: function() {
    	return (
	      	React.createElement('div', {},
		        React.createElement('h1', {}, 'Lista filmów'),
		        React.createElement('ul', {},
		        	React.createElement('li', {key: movies.id})
	        	)
	    	)
	    )
	  },
});

var MoviesTitle = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement('p', movies.title);
	}
});


var MoviesDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement('p', movies.desc);
	}
});


var element = React.createElement(Movie, MoviesTitle, MoviesDesc, {});
ReactDOM.render(element, document.getElementById("app"));


