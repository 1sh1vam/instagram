import React from "react"
import Header from "../components/header.js"
import Sidebar from "../components/sidebar/index.js"
import Timeline from "../components/timeline.js"

export default function Dashboard() {
    return (
        <div className="bg-insta-gray">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between max-w-screen-lg mx-auto">
                <Timeline />
                <Sidebar/>
            </div>
        </div>
    )
}