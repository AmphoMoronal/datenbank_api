const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM themes LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(theme) {
    let sql = `INSERT INTO themes
    (title, description, added_by, created_at) 
    VALUES 
    ('${theme.title}', '${theme.description}', '${theme.added_by}', CURRENT_TIMESTAMP);`
    console.log(sql)

    const result = await db.query(sql);

    let message = 'Error by adding the theme';

    if (result.affectedRows) {
    message = 'Theme created successfully';
    }

    return {message};
}

async function remove(id){
    const result = await db.query(
        `DELETE FROM themes WHERE id=${id}`
    );

    let message = 'Error by trying to delete this theme';

    if (result.affectedRows) {
        message = 'Theme deleted successfully!';
    }

    return {message};
}

module.exports = {
    getMultiple,
    create,
    remove
}
