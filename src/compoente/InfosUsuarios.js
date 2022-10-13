import React from "react";

export default function InfosUsuarios(props) {
    return (
        <div className="usuario">
           
            <img src="https://png.pngtree.com/png-vector/20190909/ourlarge/pngtree-outline-user-icon-png-image_1727916.jpg " alt="" />
            <h4>{props.usuario}</h4>
        </div>
    )
}