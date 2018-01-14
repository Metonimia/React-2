var movies = [
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

var Movie = React.createElement ({
	propTypes: {
	    movies: React.PropTypes.object.isRequired,
	  },

	render: function () {
		return React.createElement('li', {key: movies.id}, )
	}
});

var MovieTitle = React.createElement ({
	propTypes: {
	    movies: React.PropTypes.object.isRequired,
	  },

	render: function () {
		return React.createElement('h2', {key: movies.id}, this.props.movies.name)
	}
});

var element = 
	React.createElement(Movie);
	React.createElement(MovieTitle);
ReactDOM.render(element, document.getElementById('app'));