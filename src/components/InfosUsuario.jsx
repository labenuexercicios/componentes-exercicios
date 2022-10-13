import React from "react";

export default function InfosUsuario(props) {
    return (
        <div className="user">
            <img src={props.userImg.img} className="image" alt="sa"/>
            <span>{props.name.name}</span>
        </div>
    )
}