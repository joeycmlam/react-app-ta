import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));



function ContainedButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="default" className={classes.button} size={'small'}>
                All
            </Button>
            <Button variant="contained" color="secondary" disabled className={classes.button} size={'small'}>
                Prev
            </Button>
            <Button variant="contained" color="primary" disabled className={classes.button} size={'small'}>
                Next
            </Button>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button} size={'small'}>
                    Upload
                </Button>
            </label>
        </div>
    );
}

export default ContainedButtons;
