import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {TailSpin} from "react-loader-spinner";
import React from "react";

export const CircularLoader = (props: { height: string | number | undefined; width: string | number | undefined; color: string | undefined; label: string | undefined; }) => {
    return (
        <TailSpin
            height={props.height}
            width={props.width}
            color={props.color}
            ariaLabel={props.label}
        />
    )
}
