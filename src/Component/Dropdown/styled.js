import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import Dropdown from "rc-dropdown";

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '@media (max-width: 600px)': {
        width: '100%',
    }
}));

export const StyledDropDown = styled(Dropdown)(({ theme }) => ({
    width: "400px",
    marginLeft: "-10px"
}));