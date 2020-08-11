import React from 'react'

import { Switch, Route } from 'react-router-dom';

import PostList from './components/PostList';

function AppRouter() {
    return (
        <Switch>
            <Route path="/:topic" children={<PostList />} />
        </Switch>
    )
}

export default AppRouter;
