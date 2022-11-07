const SearchBox = () => {
    return (

        <form>
            <div className="relative">
                <div className="flex  absolute inset-y-0 left-40 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-[#7F6AD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input  type="search" id="default-search" className="block h-[3rem] w-[14rem] p-4 pl-10 text-sm text-gray-900 rounded-lg border border-[#C6BAF8] focus:ring-none focus:border-none" placeholder="Search Here" />
            </div>
        </form>

    )
}
export default SearchBox;