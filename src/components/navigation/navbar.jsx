import logo from '../../assets/logo.png'

export default function SideNavigation() {
    return(
        <aside class="w-64" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <a href="https://sei-financial-tracker.vercel.app" class="flex items-center pl-2.5 mb-5">
                    <img src={logo} class="h-6 mr-3 sm:h-7" alt="Financial Tracker Logo"/>
                </a>
            </div>
        </aside>
    )
}