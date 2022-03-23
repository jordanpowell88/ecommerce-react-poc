import { ReactElement } from "react"

const RemoveFromCartButton = ({ removeFromCart }: { removeFromCart: () => void }): ReactElement => (
    <button
        type="button"
        className="mt-10 w-full outline outline-offset-2 outline-red-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-700 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:text-white"
        onClick={removeFromCart}
    >
        Remove From Cart
    </button>
)
export default RemoveFromCartButton
