import React from "react"
import useUser from "../../hooks/use-user"

export default function Sidebar() {
    const {user} = useUser()
    return (<p className="col-start-3">I am from sidebar</p>)
}