import { ReactElement } from "react";
import { Product } from './client';
import './Item.css';

const Item = ({ product }: { product: Product }): ReactElement => (
    <div className="item">
        { product.toString()}
    </div>
)
export default Item