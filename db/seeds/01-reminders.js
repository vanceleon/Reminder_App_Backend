exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reminders")
    .then(function() {
      // Inserts seed entries
      return knex("reminders").insert([
        { name: "take vitamins" },
        { name: "do homework" },
        { name: "Email Chris" },
      ]);
    });
};