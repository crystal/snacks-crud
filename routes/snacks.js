var express = require("express");
	router = express.Router();
	knex = require("../db/knex");

// this is the home page aka snack index (read all)
router.route('/')
  .get((req, res) => {
	  knex('snacks')
	    .select('id', 'name', 'img_url', 'review_description', 'rating')
			.orderBy('id', 'asc')
	    .then((snacks) => {
				// render the view engine template w/ users passed in
	      res.render('snacks/index', {
					// the users key & value are the same so this is {users: users}
	        snacks
	      });
			});
	})
	.post((req, res) => {
		knex('snacks')
			.insert({
				name: req.body.snack.name,
				img_url: req.body.snack.image,
				review_description: req.body.snack.review,
				rating: req.body.snack.rating
			})
			.then(() => {
				res.redirect('/')
			})
	});


// this is to create a new review
router.route('/new')
	.get((req, res) => {
		res.render('snacks/new');
	});

// this is to view a single review (read single)
router.route('/:id')
  .get((req, res) => {
	  knex('snacks')
		 	.select('id', 'name', 'img_url', 'review_description', 'rating')
			.where({
				id: req.params.id
			})
			.first()
	    .then((snack) => {
				// render the view engine template w/ users passed in
	      res.render('snacks/show', {
					// the users key & value are the same so this is {users: users}
	        snack
	      });
			});
	})
	.put((req, res) => {
		knex('snacks')
			.update({
				name: req.body.snack.name,
				img_url: req.body.snack.image,
				review_description: req.body.snack.review,
				rating: req.body.snack.rating
			})
			.where({
				id: req.params.id
			})
			.then(() => {
				res.redirect('/')
			})
	})
	.delete((req, res) => {
		knex('snacks')
			.del()
			.where({
				id: req.params.id
			})
			.then(() => {
				res.redirect('/')
			})
	});

	router.route('/:id/edit')
	  .get((req, res) => {
		  knex('snacks')
			 	.select('id', 'name', 'img_url', 'review_description', 'rating')
				.where({
					id: req.params.id
				})
				.first()
		    .then((snack) => {
					// render the view engine template w/ users passed in
		      res.render('snacks/edit', {
						// the users key & value are the same so this is {users: users}
		        snack
		      });
				});
		});

		router.route('/:id/delete')
		  .get((req, res) => {
			  knex('snacks')
				 	.select('id', 'name', 'img_url', 'review_description', 'rating')
					.where({
						id: req.params.id
					})
					.first()
			    .then((snack) => {
						// render the view engine template w/ users passed in
			      res.render('snacks/delete', {
							// the users key & value are the same so this is {users: users}
			        snack
			      });
					});
			});



module.exports = router;
