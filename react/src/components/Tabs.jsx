

const Tabs = () => {
    return (
        <div className="flex flex-col md:flex-row md:h-full">
            {/* Left sidebar */}
            <div className="md:w-75 md:flex-shrink-0 border-r border-gray-200">
                {/* Content for left sidebar */}
                {/* Adjust width and content as needed */}
                <div className="h-16 bg-gray-100 flex items-center justify-center">
                    Sidebar Content
                </div>
            </div>

            {/* Right content */}
            <div className="md:flex-1">
                {/* Content for tabs */}
                {/* Adjust width and content as needed */}
                <div className="h-16 bg-gray-200 flex items-center justify-center">
                    Tabs Content
                </div>
            </div>

            {/* Mobile view: Tabs at the bottom */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex">
                {/* Tabs for mobile view */}
                <div className="flex justify-between w-full">
                    {/* Sample tabs, adjust as needed */}
                    <button className="py-2 px-4 w-1/2 text-center">Tab 1</button>
                    <button className="py-2 px-4 w-1/2 text-center">Tab 2</button>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
