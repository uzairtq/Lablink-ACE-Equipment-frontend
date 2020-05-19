import React from "react";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import navItems from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//import classes from './Layout.module.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#62727b",
      dark: "#102027",
      main: "#000000",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffe54c",
      dark: "#c68400",
      main: "#ffb300",
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#62727b"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
    // padding: theme.spacing.unit * 3
  }
});

class layout extends React.Component {
  state = {
    profileMenuAnchor: null,
    profileMenuOpen: false
  };

  // const styleClasses = this.props.classes
  // console.log(styleClasses)

  handleProfileMenuClick = event => {
    this.setState({
      profileMenuAnchor: event.currentTarget,
      profileMenuOpen: true
    });
  };

  handleProfileMenuClose = () => {
    this.setState({ profileMenuAnchor: null, profileMenuOpen: false });
  };

  render() {
    let userManager = (
      <Button color="inherit" component={navItems.login}>
        Sign In
      </Button>
    );

    if (this.props.isAuthenticated) {
      userManager = (
        <>
          <IconButton
            color="inherit"
            aria-label="profile-more"
            aria-owns={this.state.profileMenuOpen ? "profile-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleProfileMenuClick}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={this.state.profileMenuAnchor}
            open={this.state.profileMenuOpen}
            onClose={this.handleProfileMenuClose}
            // anchorOrigin={{
            //    horizontal: "center",
            //    vertical: "bottom"
            //  }}
            // transformOrigin={{
            //   horizontal: "center",
            //   vertical: "top"
            // }}
          >
            <MenuItem key="logout" onClick={this.handleProfileMenuClose}>
              Logout
            </MenuItem>
          </Menu>
          <Avatar>
            {this.props.user.first_name.charAt(0) +
              this.props.user.last_name.charAt(0)}
          </Avatar>
        </>
      );
    }
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" className={this.props.classes.appBar}>
            <ToolBar>
              <IconButton edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" color="inherit">
                Equipment Tracking
              </Typography>
              <div className={this.props.classes.grow} />
              {userManager}
            </ToolBar>
          </AppBar>
          <Drawer
            variant="temporary"
            className={this.props.classes.drawer}
            classes={{ paper: this.props.classes.drawerPaper }}
          >
            <div className={this.props.classes.toolbar} />
            <List>
              <ListItem button component={navItems.equipment} key="equipment">
                <ListItemText primary="Equipment" />
              </ListItem>
              <ListItem button component={navItems.projects} key="projects">
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem button key="tr">
                <ListItemText primary="Test Requests" />
              </ListItem>
            </List>
            <div className={this.props.classes.grow} />
            <List>
              <ListItem button component={navItems.admin} key="settings">
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
            {/* </div> */}
          </Drawer>
          <div className={this.props.classes.content}>
            <div className={this.props.classes.toolbar} />
            {/* <main className={classes.Main}> */}
            {this.props.children}
            {/* </main> */}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(layout);
