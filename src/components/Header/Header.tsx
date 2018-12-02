import {Toolbar, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import * as React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
    public render(): JSX.Element {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' color='inherit'>
                        News
                    </Typography>
                    <Link to='/'>Home</Link>
                    <Link to='/browser'>Browser</Link>
                </Toolbar>
            </AppBar>
        )
    }
}