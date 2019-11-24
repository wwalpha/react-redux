import * as React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Fab } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import * as Actions from '@actions';
import { State } from './reducers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh'
    },
    fab: { margin: theme.spacing(1) },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  })
);

const app = (state: State) => state.app;

export default () => {
  const classes = useStyles();
  const { count } = useSelector(app);
  const actions = bindActionCreators(Actions, useDispatch());

  return (
    <Grid container className={classes.container} justify="center" alignItems="center">
      <TextField id="outlined-disabled" label="Counter" placeholder="Counter" value={count} className={classes.textField} margin="normal" variant="outlined" />
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => actions.add()}>
        <AddIcon />
      </Fab>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => actions.remove()}>
        <RemoveIcon />
      </Fab>
    </Grid>
  );
};
