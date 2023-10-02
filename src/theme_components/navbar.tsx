import Entry from "./Entry"

const Navbar = () => {
    const buttonCN = "bg-blue-600 px-8 rounded mx-4 hover:bg-blue-700"
    return (
        <div className='flex flex-row fixed top-0 px-4 w-full items-center sticky border-b-[1px] border-gray-600'>
            <div className="flex flex-row justify-start space-x-4 relative">
                <div> Home </div>
                <div> Workspace </div>
                <div> API Network </div>
                <div> Explore </div>
                <div> Docs </div>
            </div>

            <div className='flex flex-row flex-grow justify-start items-center relative pl-8'>
                <input placeholder='Search API' 
                className='px-12 py-1 text-sm m-2 bg-black  border-[1px] border-gray-600 rounded-full
                focus:outline-none focus:border-blue-400 '/> 

                <Entry name='search' location='gicon' mode='dark' type='svg'
                 className='w-6 h-6 absolute ml-4 border-gray-400 pr-2 border-r-[1px]'/>
            </div>

            <div className="flex flex-row flex-grow justify-end">
                <button className={buttonCN}>
                    Sign In
                </button>
            </div>
           
        </div>
    )
}


export default Navbar