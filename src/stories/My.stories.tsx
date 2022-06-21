import React from "react";
import {storiesOf} from '@storybook/react';
//import { Cards } from "../components/Cards";
import { CircularLoader } from "../components/CircularLoader";
import { Sidenav } from "../components/Sidenav";

const stories = storiesOf('App', module);

stories.add('Table', ()=>{
    return (
        <>
            {/* <Cards/> */}
            <CircularLoader height={100} width={100} color={"blue"} label={"loading"}/>
            <Sidenav/>
        </>
    )
});