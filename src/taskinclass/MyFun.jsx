import React from 'react'
import "./Mystyle.css";

export default function MyFun(data) {
    return (
        <div>
            <div className="container card">
                <div className="card-header">
                    <h1>Task Bar</h1>
                </div>
                <div className="card-body">
                    <h3>{data.data.userName}</h3>
                    <h3>{data.data.email}</h3>
                    <h3>{data.data.education.graduation}</h3>
                    <h3>{data.data.education.pg}</h3>
                </div>
            </div>

        </div>
    )
}
