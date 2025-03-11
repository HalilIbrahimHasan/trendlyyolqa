'use client';
import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    InputBase,
    IconButton,
    useMediaQuery,
    Menu,
    MenuItem,
    Stack,
    styled,
    Container
} from '@mui/material';
import {
    Search as SearchIcon,
    FavoriteBorderOutlined as FavoriteIcon,
    ShoppingCartOutlined as ShoppingCartIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const SearchWrapper = styled('div')({
    position: 'relative',
    color: 'black',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    '&:hover': {
        backgroundColor: '#ebebeb',
    },
    marginRight: '16px',
    marginLeft: 0,
    width: '300px !important',
    '@media (min-width: 600px)': {
        marginLeft: '24px',
        width: 'auto',
    },
});

const SearchIconWrapper = styled('div')({
    padding: '0 16px',
    top: 0,
    right: 0,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const StyledInputBase = styled(InputBase)({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: '8px 8px 8px 0',
        paddingLeft: 'calc(1em + 32px)',
        transition: 'width 0.3s ease',
        width: '250px !important',
        '@media (min-width: 768px)': {
            width: '40ch',
        },
    },
});

const StyledLink = styled(Link)({
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
    },
});

const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 960px)');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = ['Home', 'Contact', 'About', 'Sign Up'];

    return (
        <AppBar position="sticky" color="inherit" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'space-evenly', padding: '0.5rem 0' }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 0,
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        <StyledLink href="/">
                            Exclusive
                        </StyledLink>
                    </Typography>

                    {!isMobile && (
                        <Stack direction="row" spacing={4} sx={{ flexGrow: 0 }}>
                            {menuItems.map((item) => (
                                <StyledLink href={`/${item.toLowerCase().replace(' ', '-')}`} key={item}>
                                    <Typography sx={{ fontWeight: 500 }}>
                                        {item}
                                    </Typography>
                                </StyledLink>
                            ))}
                        </Stack>
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '540px' }}>
                        <SearchWrapper>
                            <StyledInputBase
                                placeholder="What are you looking for?"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                        </SearchWrapper>
                        <Typography component={'div'}>
                            <IconButton sx={{ color: 'black' }}>
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton sx={{ color: 'black' }}>
                                <ShoppingCartIcon />
                            </IconButton>
                        </Typography>
                    </Box>

                    {isMobile && (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {menuItems.map((item) => (
                                    <MenuItem
                                        key={item}
                                        onClick={handleClose}
                                        component={Link}
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
