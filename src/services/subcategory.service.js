const SubCategory = require("../models/subcategory.model")

const createSubCategory = async (subcategory) => {
    const resp = await SubCategory.create({
        name: subcategory.name,
        description: subcategory.description,
        icon: subcategory.icon,
        status: 'inactive',
        categoryId: subcategory.categoryId,
        created_at: new Date,
        updated_at: new Date
    })
    return resp;
}

module.exports = {
    createSubCategory
}