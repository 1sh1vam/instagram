import React from "react"
import useUser from "../../hooks/use-user"

export default function Sidebar() {
    const {user} = useUser()
    return (<p>I am from sidebar</p>)
}