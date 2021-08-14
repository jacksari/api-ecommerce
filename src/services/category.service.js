const Category = require("../models/category.model")

const createCategory = async (category) => {
    const resp = await Category.create({
        name: category.name,
        description: category.description,
        icon: category.icon,
        status: 'inactive',
        categoryId: category.categoryId,
        created_at: new Date,
        updated_at: new Date
    })
    return resp;
}

module.exports = {
    createCategory
}