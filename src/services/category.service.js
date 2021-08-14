const Category = require('../models/category.model');
const slug = require('slug')


const createCategory = async (category) => {
    const resp = await Category.create({
        name: category.name,
        description: category.description,
        image: category.image,
        slug: slug(category.name),
        created_at: new Date,
        updated_at: new Date
    })
    return resp
}

const getCategory = async () => {
    const resp = await Category.find();
    return resp;
}

module.exports = {
    createCategory,
    getCategory
}