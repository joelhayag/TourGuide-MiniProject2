import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/home">
        <IconButton aria-label="show 0 new Home" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem component={Link} to="/about">
        <IconButton aria-label="show 0 new About" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <InfoIcon />
          </Badge>
        </IconButton>
        <p>About</p>
      </MenuItem>
      <MenuItem component={Link} to="/contact">
        <IconButton aria-label="show 0 new Contact" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ContactMailIcon />
          </Badge>
        </IconButton>
        <p>Contact</p>
      </MenuItem>
      <MenuItem component={Link} to="/webapp">
        <IconButton aria-label="show 0 new Tour App" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <DynamicFeedIcon />
          </Badge>
        </IconButton>
        <p>TourGuide App</p>
      </MenuItem>
    </Menu>

  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <MenuItem component={Link} to="/home">
            <img src="logo.png" width={140} height={40} alt="logo" justifyContent="middle" alignItems="center" />
          </MenuItem>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search places…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem component={Link} to="/home">
              <IconButton aria-label="show 0 new Home" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <HomeIcon />
                </Badge>
              </IconButton>
              <p>Home</p>
            </MenuItem>
            <MenuItem component={Link} to="/about">
              <IconButton aria-label="show 0 new About" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <InfoIcon />
                </Badge>
              </IconButton>
              <p>About</p>
            </MenuItem>
            <MenuItem component={Link} to="/contact">
              <IconButton aria-label="show 0 new Contact" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <ContactMailIcon />
                </Badge>
              </IconButton>
              <p>Contact</p>
            </MenuItem>
            <MenuItem component={Link} to="/webapp">
              <IconButton aria-label="show 0 new Tour App" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <DynamicFeedIcon />
                </Badge>
              </IconButton>
              <p>TourGuide App</p>
            </MenuItem>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
