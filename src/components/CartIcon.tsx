import { ReactElement } from "react";
import { ShoppingBagIcon } from '@heroicons/react/solid';

const CartIcon = ({ items }: { items: number }): ReactElement => (
    <div className="ml-4 flow-root lg:ml-6">
        <div className="group -m-2 p-2 flex items-center" data-cy="shoppingCartIcon">
            <ShoppingBagIcon
                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{items}</span>
            <span className="sr-only">items in cart, view bag</span>
        </div>
    </div>
)
export default CartIcon;