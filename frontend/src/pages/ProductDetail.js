import ProductApi from "../api/ProductApi";
import { parseRequestUrl } from "../utils"

const ProductDetail = {
    async render(){
        const { id } = parseRequestUrl();
        const { data : product } = await ProductApi.get(id);
        
        return `
            <div>
                heloo  ${product.name}
            </div>
            `
    }
   
}

export default ProductDetail
