import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Person(props) {
    return (
        <div className="m-4 text-center">
            <p>{props.fname} {props.lname}</p>
            <Image src={props.img} roundedCircle />
        </div>
    )
}
