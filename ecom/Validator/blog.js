const { cheak } = require('express-validator');

exports.store=[
    () => {
        console.log(store);
    },
    cheak('title', "Invalid title").isEmpty().trim(),
    cheak('details', "Invalid details").isEmpty().trim(),
    check('slug','Slug Invalid').not().isEmpty().trim(),
    check('image', "Invalid image".isEmpty),
]

exports.update=[
    cheak('title', "Invalid title").isEmpty().trim(),
    cheak('details', "Invalid details").isEmpty().trim(),
    
    check('image', "Invalid image".isEmpty)
]