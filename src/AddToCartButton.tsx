import { ReactElement } from "react";

const AddToCartButton = ({ addToCart }: { addToCart: () => void }): ReactElement => (
    <button
        type="button"
        className="mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onClick={addToCart}
        >
        Add To Cart
    </button>
)
export default AddToCartButton