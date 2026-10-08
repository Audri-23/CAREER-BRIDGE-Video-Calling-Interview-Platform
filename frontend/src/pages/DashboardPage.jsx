import { SignOutButton } from '@clerk/react'

function DashboardPage() {
    return (
        <div className="flex justify-around items-center mt-125">
            <div>
                DashboardPage
            </div>
            <div>
                <SignOutButton className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-200" />
            </div>
        </div>
    )
}

export default DashboardPage