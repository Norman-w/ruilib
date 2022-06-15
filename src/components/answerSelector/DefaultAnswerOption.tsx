import React from 'react';
import classNames from './DefaultAnswerOption.module.css'
import {IOption} from "./interfaces";
export const DefaultAnswerOption = (prop:IOption)=>
{
    return (
        <div className={classNames.main}>
            <div className={classNames.title}>{prop.title}</div>
            <div className={classNames.desc}>{prop.desc}</div>
        </div>
    );
}
