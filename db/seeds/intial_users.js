exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    { name: "michael", age: 17, email: "micha@gmail.com", phone: "094749027" },
    { name: "pepe", age: 12, email: "pepe@gmail.com", phone: "13123" },
    { name: "pedro", age: 12, email: "pedro@gmail.com", phone: "8576" },
    { name: "jose", age: 12, email: "jose@gmail.com", phone: "4356475" },
    { name: "raul", age: 12, email: "raul@gmail.com", phone: "2143246535" },
    { name: "jorge", age: 12, email: "jorge@gmail.com", phone: "2354234234234" },
    { name: "anuel", age: 12, email: "anuel@gmail.com", phone: "4342" },
    { name: "fabricio", age: 12, email: "fabricio@gmail.com", phone: "432432" },
  ]);
};
