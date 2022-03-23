import { ReactElement } from "react";
import { Product } from './client';

const Item = ({ product }: { product: Product }): ReactElement => (
    <a key={product.product_id} href={`products/${product.product_id}`} className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
                src={product.image_urls[0]}
                alt={product.name}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{product.amount}</p>
    </a>
)
export default Item