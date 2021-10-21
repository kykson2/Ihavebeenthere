import Header from "./Header";

interface AppLayoutProps {
    children: React.ReactNode
}

function AppLayout({children}: AppLayoutProps) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default AppLayout