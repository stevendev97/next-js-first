import React, { useState, useContext } from 'react'
import Link from 'next/link';
import Router from "next/router";
import useSWR, {mutate} from 'swr';
import useSWRMutation from 'swr/mutation'

import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Style from '../componentsType/customInputStyle';
import loginContext from '../contexts/loginContext';
import {useShoppingCart} from '../contexts/cartContext';
import storage from '../lib/util/storage';
import checkLogin from '../lib/util/checkLogin';

const pages = ['MEN', 'WOMEN', 'KIDS', 'SALE', 'GIFTS'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settingsWithoutLogin = ['Login', 'Register']
const StyledButton = styled(Button, {})(Style.btn)

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    // const [isLoggedin, setIsLoggedin] = useState<boolean>(false)
    const {loginStatus, setLoginStatus} = useContext(loginContext);

    const handleLogout = async (e: any) => {
        e.preventDefault();
        window.localStorage.removeItem("user");
        mutate("user", null);
        // const { trigger } = useSWRMutation('/api/user', storage);
        Router.push(`/`)
        // .then(() => trigger("user"));
    };

    // console.log("Context: ",loginStatus);

    const {data:currentUser} = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);
    console.log("SWR: ", isLoggedIn);

    const {cartQuantity} = useShoppingCart()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" className='nav_bar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <StorefrontIcon sx={{ display: { xs: 'none', md: 'flex' }, ml:"44.25%", position:"absolute"}} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            ml: "47.25%",
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            position: "absolute"
                        }}
                    >
                        Shopping
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link href={page === 'Home' ? '/' : `/${page.toLowerCase()}`} className='nav_btn'>
                                        <Typography textAlign="center">{page}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <StorefrontIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Shopping
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}>
                                    {page}
                                </Link>

                            </Button>
                        ))}
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Link href="/seller_login">
                        <StyledButton size="small" sx={{color:"white", mb:1.75, mr:2, py: 0, px:1, fontSize: '11px'}}>
                        Seller Entry
                        </StyledButton>
                        </Link>
                        {/* {isLoggedIn ? <StyledButton size="small" sx={{color:"white", mb:1.75, mr:1, py: 0, px:1, fontSize: '11px'}}
                        onClick={()=>{setLoginStatus(false);}}>
                        logout
                        </StyledButton>
                        : 
                        <> */}
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <PersonIcon sx={{ display: { md: 'flex' }, mr: 2}} className='nav_icon' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {isLoggedIn ?
                                settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        {setting === "Logout" ? <Typography textAlign="center" onClick={(e)=>{handleLogout(e)}}>{setting}</Typography>
                                        : 
                                        <Typography textAlign="center">{setting}</Typography>}
                                    </MenuItem>
                                )) :
                                settingsWithoutLogin.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Link href={setting === 'Register' ? '/register' : '/login'}>
                                            <Typography className='icons_links' textAlign="center">{setting}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                        
                        <Link href="/cart">
                        <span className="cart_icon">
                        <ShoppingBasketIcon  sx={{mr:1, ml:1, mb:2, fontSize:"26px"}}/> 
                        <span className="nav_cart_chars nav_basketCount">{cartQuantity}</span>  
                        </span>      
                        </Link>        
                    </Box>
                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}