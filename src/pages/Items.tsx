import { ReactElement, useState } from "react";
import { Product, useProducts } from "../client";
import { CartIcon, Filter, Item, Search } from "../components";

const Items = (): ReactElement => {
    const { products } = useProducts();
    const [search, setSearch] = useState<string>();
    const [filter, setFilter] = useState<string>();
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const handleFilters = (product: Product): boolean => {
        if (filter && search) {
            if (filter === 'Name') {
                return product.name.toLowerCase().includes(search.toLocaleLowerCase())
            }

            if (filter === 'Description') {
                return product.description.toLowerCase().includes(search.toLocaleLowerCase())
            }
        }

        return true;
    }

    const addToCart = (p: Product): void => {
        setCartItems([...cartItems, p])
    }

    const removeFromCart = (p: Product): void => {
        setCartItems(cartItems.filter(i => i.product_id !== p.product_id));
    }

    return (
        <div className="bg-white">
            <CartIcon items={cartItems.length} />
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold mb-2">Products</h2>
                <div className="flex flex-row mb-2">
                    <Search onChange={setSearch} />
                    <Filter onChange={setFilter} />
                </div>
                <hr className="mb-4" />
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.filter(handleFilters).map(product => <Item key={product.product_id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} /> )}
                </div>
            </div>
        </div>
    )
}
export default Items;