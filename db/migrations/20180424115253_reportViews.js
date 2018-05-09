
exports.up = function(knex, Promise) {

return Promise.all([

knex.raw('CREATE OR REPLACE VIEW bank_branches as \
select br."ifsc",br."bank_id",br."branch",br."address",br."city",br."district",br."state",\
b."name" \
from "branches" br inner join "banks" b on (br.bank_id = b."id");')

])
};

exports.down = function(knex, Promise) {

};
