import React from 'react'

function Input({value, onChange, props}) {
    return (
        <div className="flex flex-wrap items-center justify-center sm:col-span-3">
            <label htmlFor="Search" className="hidden md:flex text-lg font-medium leading-6 text-white pr-2">
                Search
            </label>
            <div className="">
                <input
                id="Search"
                name="Search"
                type="text"
                value={value}
                onChange={onChange} 
                {...props}
                placeholder='Search your intrest...'
                className="inline w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}

export default Input
