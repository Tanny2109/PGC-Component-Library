import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { TailSpin } from 'react-loader-spinner';
import React from 'react';

interface loaderProps {
    height: number | string;
    width: number | string;
    color: string;
    label: string;
}

const CircularLoader: React.FC<loaderProps> = (props) => {
    return <TailSpin height={props.height} width={props.width} color={props.color} ariaLabel={props.label} />;
};

export default CircularLoader;
