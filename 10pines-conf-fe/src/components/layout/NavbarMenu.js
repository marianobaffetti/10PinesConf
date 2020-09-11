import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  logo_10pines: {
    maxWidth: 30
  }
}));

function NavbarMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false
  });

  const openDrawer = () => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ open: true });
  };

  const closeDrawer = () => (event) => {
    if(event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ open: false });
  };


  return <React.Fragment>
    <IconButton edge="start" color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true"
                className={classes.menuButton}
                onClick={openDrawer()}>
      <MenuIcon/>
    </IconButton>
    <Drawer anchor={'left'} open={state['open']} onClose={closeDrawer()}>
    </Drawer>
  </React.Fragment>;
}

export default NavbarMenu;
