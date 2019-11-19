import * as React from 'react';
import { Grid, TextField, Fab } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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

export default () => {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);

  return (
    <Grid container className={classes.container} justify="center" alignItems="center">
      <TextField id="outlined-disabled" label="Counter" placeholder="Counter" value={count} className={classes.textField} margin="normal" variant="outlined" />
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => setCount(count + 1)}>
        <AddIcon />
      </Fab>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => setCount(count - 1)}>
        <RemoveIcon />
      </Fab>
    </Grid>
  );
};
