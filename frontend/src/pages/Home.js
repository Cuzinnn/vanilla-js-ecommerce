import data from '../data.js';
const HomePage = {
    render() {
        const { products } = data;
        return `<ul>
                    ${products.map(item => `<li>
                        <a href="/#/product/${item.id}">${item.name}</a></li>`).join("")}
               </ul>`
    }
};
export default HomePage;