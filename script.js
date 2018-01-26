const movies = [
	{
		id: 1,
		title: "Harry Potter",
		desc: "Film o czarodzieju",
		pic: "http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg"
	},
	{
		id: 2,
		title: "Król Lew",
		desc: "Film o królu sawanny",
		pic: "http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg"
	},
	{
		id: 3,
		title: "Wielkie piękno",
		desc: "Trzeba zobaczyć, żeby wiedzieć",
		pic: "http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg"
	},
	{
		id: 4,
		title: "Paterson",
		desc: "Film o kierowcy autobusu i poecie",
		pic: "http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg"
	},
	{
		id: 5,
		title: "Lady Bird",
		desc: "Jutro się dowiem :)",
		pic: "http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg"
	}
];

var Movie = React.createClass({

	propTypes: {
		movie: React.PropTypes.object.isRequired
	},

	render: function() {
    	return React.createElement("div", {},
    		React.createElement(MovieTitle, {title: this.props.movie.title}),
    		React.createElement(MovieDesc, {desc: this.props.movie.desc}),
    		React.createElement(MovieImage, {imageUrl: this.props.movie.pic})
    	);
    }
});

var MovieTitle = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement("p", {}, this.props.title);
	}
});


var MovieDesc = React.createClass({

	propTypes: {
		desc: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement("p", {}, this.props.desc);
	}
});

var MovieImage = React.createClass({

	propTypes: {
		imageUrl: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement("img", {src: this.props.imageUrl});
	}
});

var MoviesList = React.createClass({

	propTypes: {
		items: React.PropTypes.array.isRequired
	},

	render: function() {
		var moviesElements = this.props.items.map(function(item) {
			return React.createElement(Movie, {key: item.id, movie: item});
		});
		return React.createElement("ul", {}, moviesElements);
	}
});

var element = React.createElement(MoviesList, {items: movies});
ReactDOM.render(element, document.getElementById("app"));
