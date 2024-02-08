import React from 'react';

const Home = React.lazy(() => import('.'));

export const routes = [
    {
        path: '/home',
        name: 'home',
        element: Home,
        meta: {},
        id: 1,
        child: [],
    },
];
