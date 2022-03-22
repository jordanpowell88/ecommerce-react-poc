import { ReactElement } from "react";
import { useProducts } from "./client";
import Item from './Item';

const Items = (): ReactElement => {
    const products = useProducts();

    return (
        <>
           {products.map(product => <Item product={product} />)}
        </>
    )
}
export default Items;