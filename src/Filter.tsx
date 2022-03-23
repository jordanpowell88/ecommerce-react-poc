import { ChangeEvent, ReactElement } from "react";

const Filter = ({ onChange }: { onChange: (value: string) => void }): ReactElement => {
    const filter = (event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)
    return (
        <div className="basis-1/8">
        <select
            id="filter"
            name="filter"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue=""
            onChange={filter}
        >
            <option></option>
            <option>Name</option>
            <option>Description</option>
        </select>
        </div>
    )
}
export default Filter;