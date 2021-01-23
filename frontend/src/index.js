import Homepage from './pages/Home.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetailPage from './pages/ProductDetail.js'
import Error404Page from './pages/Error404Page.js';
import { parseRequestUrl } from './utils.js'

const $ = selector => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements
}
const routes = {
    '/': Homepage,
    '/products': ProductsPage,
    '/products/:id': ProductDetailPage
}

const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '');

    console.log(routes[parseUrl]);

    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;

    const main = $('#main-content');
    main.innerHTML = await page.render();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)