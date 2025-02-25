import SidebarNav from '@/components/settings/SidebarNav'

interface SettingsLayoutProps {
    children: React.ReactNode
}

// レイアウト
const SettingsLayout = ({ children }: SettingsLayoutProps) => {
    return (
        <div className='w-11/12 mx-auto flex flex-col space-y-8 md:w-2/3 md:flex-row md:space-x-12 md:space-y-0 lg:w-1/2'>
            <div className='md:w-1/4'>
                <SidebarNav />
            </div>
            <div className='flex-1 md:max-w-2xl'>{children}</div>
        </div>
    )
}

export default SettingsLayout
