import React from 'react'
import { About } from './About';
import {homeObjOne} from '../Data.js'

export const HomePage = () => {
    return (
        <>
            <About {...homeObjOne} />
        </>
    )
}
