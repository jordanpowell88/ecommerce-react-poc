import { ReactElement, useState } from "react";
import { Product, useProducts } from "./client";
import Filter from "./Filter";
import Item from './Item';
import Search from './Search';

const Items = (): ReactElement => {
    const products = useProducts();
    const [search, setSearch] = useState<string>();
    const [filter, setFilter] = useState<string>();

    const handleFilters = (product: Product): boolean => {
        if (filter && search) {
            if (filter === 'Name') {
                return product.name.includes(search)
            }

            if (filter === 'Description') {
                return product.description.includes(search)
            }
        }

        return true;
    }

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold mb-2">Products</h2>
                <div className="flex flex-row mb-2">
                    <Search onChange={setSearch} />
                    <Filter onChange={setFilter} />
                </div>
                <hr className="mb-4" />
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.filter(handleFilters).map(product => <Item key={product.product_id} product={product} />)}
                </div>
            </div>
        </div>
    )
}
export default Items;