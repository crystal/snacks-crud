exports.up = function(knex, Promise) {
  return knex.schema.createTable("snacks", function(table){
  	table.increments().primary();
  	table.string("name");
    table.text("img_url", "longtext");
  	table.text("review_description");
    table.bigInteger("rating");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("snacks");
};
