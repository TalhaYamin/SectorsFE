import React, { useEffect, useState } from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item, Item as MenuItem, SubMenu } from 'rc-menu';
import { TextField } from '@mui/material';
import { IoIosArrowDown } from 'react-icons/io';
import 'rc-dropdown/assets/index.css';
import 'rc-menu/assets/index.css';
import api from '../../helpers/api';
import { StyledTextField, StyledDropDown } from './styled';

const NestedDropdown = ({ setSelectedSectors, selectedSectors }) => {
    const [sectorsList, setSectorsList] = useState([]);

    useEffect(() => {
        const fetchSectors = async () => {
            try {
                const res = await api.get('/sectors');
                setSectorsList(res);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSectors();
    }, []);

    const handleMenuItemClick = (item) => {
        setSelectedSectors(item);
    };

    const renderMenu = (items) => {
        return items.map((item) => {
            if (item.categories?.length) {
                return (
                    <SubMenu
                        key={item.id}
                        title={item.sectorName}
                        value={item.value}
                    >

                        {renderMenu(item.categories)}
                    </SubMenu>
                );
            }
            return (
                <Item style={{ padding: '4px 24px' }} key={item.id} onClick={() => handleMenuItemClick(item)}>
                    {item.sectorName}
                </Item>
            );
        });
    };

    return (
        <StyledDropDown overlay={<Menu>{renderMenu(sectorsList)}</Menu>} trigger={['click']} >
            <StyledTextField
                className='rc-dropdown-link'
                fullWidth
                placeholder='Select Sectors'
                value={selectedSectors && selectedSectors.sectorName}
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <IoIosArrowDown style={{ marginLeft: '8px' }} />
                    ),
                }}
            />
        </StyledDropDown>
    );
};

export default NestedDropdown;
