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

const getCategoryById = async(id) => {
    const resp = await Category.findById(id);
    return resp;
}

const getCategoryBySlug = async(slug) => {
    const resp = await Category.findOne({slug});
    return resp;
}

const updateCategoryById = async(category, id) => {
    category.updated_at = new Date;
    const resp = await  Category.findByIdAndUpdate(id, category,{new: true});
    return resp;
}

const deleteCategoryById = async(id) => {
    const resp = await Category.findByIdAndDelete(id);
    return resp
}

module.exports = {
    createCategory,
    getCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
    getCategoryBySlug
}