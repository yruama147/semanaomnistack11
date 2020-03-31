/** metodo up sempre cria as tabelas */
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  /**metodo usado caso eu queira voltar atras quando eu crio a tabela - deletar a tabela*/
  exports.down = function(knex) {
      return knex.schema.dropTable('incidents'); 
  };
  