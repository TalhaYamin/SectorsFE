import React, { useState, useEffect } from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
    Button,
    FormControl,
} from "@mui/material";
import NestedDropdown from "../../Component/Dropdown/index"
import api from "../../helpers/api";

const Sectors = () => {
    const [name, setName] = useState('');
    const [selectedSectors, setSelectedSectors] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [terms, setTerms] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setTerms(event.target.checked);
    };

    const handleSave = async () => {
        try {
            const response = await api.post("/user", {

                Name: name,
                Sector: selectedSectors,
                AgreeToTerms: terms

            });
            setName('')
            setSelectedSectors('')
            setTerms(false)
        } catch (error) {
            console.error(error);
        }
    };

    const validateForm = () => {
        const checkValidation = name && selectedSectors && terms
        setIsFormValid(checkValidation);
    };

    useEffect(() => {
        validateForm();
    }, [name, selectedSectors, terms]);

    return (
        <Box sx={{ maxWidth: 400, margin: "auto", marginTop: "20px", padding: "16px" }}>
            <Typography fontWeight="bold" variant="h6" sx={{ marginBottom: "20px" }}>
                Please enter your name and pick the sectors you are currently involved
                in.
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
                <TextField
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={handleNameChange}
                />
                <Box sx={{ mt: 2 }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <NestedDropdown setSelectedSectors={setSelectedSectors} selectedSectors={selectedSectors} />
                    </FormControl>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={terms}
                                checked={terms}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="Agree to terms"
                    />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSave}
                        disabled={!isFormValid}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Sectors;
