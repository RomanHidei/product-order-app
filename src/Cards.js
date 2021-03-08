import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

const mainStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: 30,
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  label: {
    padding: '30px',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

function Cards(props) {
  const classes = mainStyles();
  return (
    <Card className={classes.root}  >
      <CardHeader title={props.article} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center" >
          {props.title}
        </Typography>
        <div className={classes.label}>
          <Typography align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button onClick= {this.onIncrease } variant="contained" color="primary" className={classes.button} >Add to Bucket</Button>
      </CardActions>

    </Card>
  );
}

export default Cards;

