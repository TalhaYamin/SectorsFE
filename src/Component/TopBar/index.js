import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { StyledAppBar, StyledButton } from './styled';
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {
    const location = useLocation();

    return (
        <StyledAppBar>
            <Typography variant='h5'>
                Logo
            </Typography>
            <Box>
                <StyledButton
                    component={Link}
                    to="/sectors"
                    color="inherit"
                    variant={location.pathname === '/sectors' ? 'contained' : 'outlined'}
                    sx={{
                        color: location.pathname === '/sectors' ? '#1976D2' : 'inherit'
                    }}
                >
                    Sectors
                </StyledButton>
                <StyledButton
                    component={Link}
                    to="/users"
                    color="inherit"
                    variant={location.pathname === '/users' ? 'contained' : 'outlined'}
                    sx={{
                        color: location.pathname === '/users' ? '#1976D2' : 'inherit'
                    }}
                >
                    User Details
                </StyledButton>
            </Box>
        </StyledAppBar >
    );
}

export default TopBar;
