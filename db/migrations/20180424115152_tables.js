exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('banks', function(table){
        table.bigint('id').primary();
        table.string('name').unique().notNullable();
    })

        .createTable('branches', function(table){
            table.string('ifsc').primary();
            table.bigint('bank_id');
            table.string('branch');
            table.string('address');
            table.string('city');
            table.bigint('branches_banks_fkey').notNull();
            table.string('district');
            table.string('state');
            table.foreign('branches_banks_fkey').references('banks.id');
        })


        ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('banks'),
        knex.schema.dropTableIfExists('branches')
    ])
};
