
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        {name:'Alpha', img_url:'a.jpg', review_description: 'This snack is great!', rating: 5},
        {name:'Beta', img_url:'a.jpg', review_description: 'This snack is good!', rating: 4},
        {name:'Charlie', img_url:'a.jpg', review_description: 'This snack is okay!', rating: 3},
        {name:'Delta', img_url:'a.jpg', review_description: 'This snack is meh!', rating: 2},
        {name:'Echo', img_url:'a.jpg', review_description: 'This snack is terrible!', rating: 1}
      ]);
    });
};
