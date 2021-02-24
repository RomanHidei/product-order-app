import React from 'react';
import Cards from '../../Cards';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const mainStyles = makeStyles({
  gridContainer: {
    marginLeft: "40px",
    marginRight: "40px",
  }
})

function Products() {
  const classes = mainStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} sm={6} md={3}>
        <Cards title="25" article='Article 1' />
      </Grid>
      <Grid item xs={2} sm={6} md={3}>
        <Cards title="35" article="Article 2" />
      </Grid>
      <Grid item xs={2} sm={6} md={3}>
        <Cards title="45" article="Article 3" />
      </Grid>
    </Grid>
  );
}
export default Products;