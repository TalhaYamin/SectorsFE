import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const StyledAppBar = styled(Box)(({ theme }) => ({
    background: '#1976D2 !important',
    color: '#ffffff',
    padding: "16px 30px",
    zIndex: 2,
    position: "sticky",
    top: 0,
    boxShadow: "3px 3px 3px 3px #1976D2 ",
    display: "flex",
    justifyContent: "space-between",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    marginRight: "10px"
}));
