/** metodo up sempre cria as tabelas */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  });
};

/**metodo usado caso eu queira voltar atras quando eu crio a tabela - deletar a tabela*/
exports.down = function(knex) {
    return knex.schema.dropTable('ongs'); 
};
