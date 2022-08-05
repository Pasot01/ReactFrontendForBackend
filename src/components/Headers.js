import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@mui/material';

export const Headers = () => {
    const [value, setValue] = useState();
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h3'>MernAuth</Typography>
                <Box sx={{ marginLeft: 'auto' }}>
                    <Tabs
                        indicatorColor='secondary'
                        onChange={(e, val) => setValue(val)}
                        value={value}
                        textColor='inherit'
                    >
                        <Tab label='Login' />
                        <Tab label='Signup' />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}