import { Box } from '@mui/material'
import React from 'react'
import TopBar from '../../Component/TopBar'
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <>
            <TopBar />
            <Box>
                <Outlet />
            </Box>
        </>
    )
}

export default Mainlayout