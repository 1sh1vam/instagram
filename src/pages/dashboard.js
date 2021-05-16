import React from "react"
import Header from "../components/header.js"
import Sidebar from "../components/sidebar/index.js"
import Timeline from "../components/timeline.js"

export default function Dashboard() {
    return (
        <div className="bg-gray-100">
            <p>Hello from Dashboard</p>
            <div className="">
                <Header />
                <Timeline />
            </div>
        </div>
    )
}