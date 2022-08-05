import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@mui/material';
import { Link } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
    return (
        // sticky place le composant appellé en dessous du header
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h3'>MernAuth</Typography>
                <Box sx={{ marginLeft: 'auto' }}>
                    <Tabs
                        indicatorColor='secondary'
                        onChange={(e, val) => setValue(val)}
                        value={value}
                        textColor='inherit'
                    >
                        <Tab to="/login" LinkComponent={Link} label="Login" />
                        <Tab to="/signup" LinkComponent={Link} label="Signup" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header





