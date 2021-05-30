import React from "react"
import Skeleton from "react-loading-skeleton"

export default function Timeline() {
    return (
        <Skeleton count={4} width={640} height={500} className="mb-5"/>
    )
}