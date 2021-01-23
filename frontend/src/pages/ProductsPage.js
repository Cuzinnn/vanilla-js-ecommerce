import ProductApi from '../api/ProductApi.js';

const ProductsPage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        return `<ul>
                    ${products.map(item => `
                        <li>
                            <a href="/#/products/${item.id}">${item.name}</a>
                        </li>
                    `).join("")}
               </ul>`
    }
}
export default ProductsPage;