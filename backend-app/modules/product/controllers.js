const axios = require('axios');

// Helper function to group products by category
function groupByCategory(products) {
  const groupedProducts = {};

  products.forEach((product) => {
    const category = product.category;
    if (!groupedProducts[category]) {
      groupedProducts[category] = [];
    }
    groupedProducts[category].push({
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
    });
  });

  return groupedProducts;
}

// Controller function to get products
const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const productsData = response.data;
    console.log('products', productsData)

    // Assume the products have a "category" field
    const groupedProducts = groupByCategory(productsData.products);

    res.status(200).json(groupedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getProducts };
