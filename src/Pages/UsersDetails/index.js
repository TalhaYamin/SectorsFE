import React, { useEffect, useState } from 'react'
import api from '../../helpers/api';
import { Table } from 'antd';
import { Box } from '@mui/material';
import { StyledTable } from './styled';

const UsersData = () => {
    const [userData, setUserData] = useState()

    useEffect(() => {
        const fetchSectors = async () => {
            try {
                const res = await api.get('/users');
                setUserData(res);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSectors();
    }, []);

    console.log("=============", userData)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Agree to Terms',
            dataIndex: 'AgreeToTerms',
            key: 'AgreeToTerms',
            render: (text) => (text ? 'Yes' : 'No'),
        },
        {
            title: 'Sectors',
            dataIndex: 'Sector',
            key: 'Sector',
        },
    ];

    return (
        <StyledTable>
            <Table dataSource={userData} columns={columns} />
        </StyledTable>
    )
}

export default UsersData