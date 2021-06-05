import React from "react"
import useUser from "../../hooks/use-user"

export default function Sidebar() {
    const { user } = useUser()
    return (
        <div className="p-4">
            <p>I am from sidebar</p>
        </div>
    )
}