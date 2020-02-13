import React from "react";
import PropTypes from "prop-types";
//---import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExitToApp from '@material-ui/icons/ExitToApp';

import { useStyles, Copyright } from './common'

function SignOut(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Out
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Вы вошли как <b>{props.username}</b>
        </Typography>
        <form className={classes.form} noValidate>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {e.preventDefault(); props.handleSignOut()}}
          >
            <ExitToApp />
            Sign Out
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

//---
/*
const mapStateToProps = (state) => (
  {
    username: state.user.username
  }
);
*/

SignOut.propTypes = {
  username: PropTypes.string.isRequired,
  handleSignOut: PropTypes.func.isRequired,
};

//---export default connect(mapStateToProps)(SignOut);
export default SignOut;
