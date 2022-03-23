import { ReactElement, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { Product } from './client';
import RemoveFromCartButton from "./RemoveFromCartButton";

const Item = ({ product, addToCart, removeFromCart }: { product: Product, addToCart: (product: Product) => void, removeFromCart: (product: Product) => void }): ReactElement => {
    const [showAddButton, setShowAddButton] = useState<boolean>(true)

    const add = () => {
        addToCart(product);
        setShowAddButton(false)
    }

    const remove = () => {
        removeFromCart(product)
        setShowAddButton(true);
    }

    return (
        <div key={product.product_id} className="group" data-cy="product">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={product.image_urls[0]}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.amount}</p>
            {showAddButton ? <AddToCartButton addToCart={add} /> : <RemoveFromCartButton removeFromCart={remove} /> }
        </div>
    )
}
export default Item