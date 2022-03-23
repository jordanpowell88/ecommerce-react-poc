import { ChangeEvent, ReactElement } from "react";

const Search = ({ onChange }: { onChange: (value: string) => void }): ReactElement => {
    const search = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)

    return (
        <div className="basis-1/8 mx-2">
        <label htmlFor="search" className="sr-only">
            Email
        </label>
        <input
            type="text"
            name="search"
            id="search"
            onChange={search}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="search"
        />
        </div>
    )
}
export default Search;