import React from 'react';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Profile = React.lazy(() => import('../pages/Profile/Profile'));
const Baggage = React.lazy(() => import('../pages/Baggage/Baggage'));
const Trucks = React.lazy(() => import('../pages/Trucks/Trucks'));
const Cargo = React.lazy(() => import('../pages/Cargo/Cargo'));
const Login = React.lazy(() => import('../pages/Authorization/login/login'));
const Mytruck = React.lazy(() => import('../pages/MyTruck/index'));
const CreateWay = React.lazy(() => import('../pages/MyTruck/CreateWay/CreateWay'));

export const routes = [
    {
        path: '/',
        name: 'home',
        element: Home,
        meta: {},
        id: 1,
        child: [],
    },
    {
        path: '/profile',
        name: 'profile',
        element: Profile,
        meta: {},
        id: 2,
        child: [],
    },
    {
        path: '/login',
        name: 'login',
        element: Login,
        meta: {},
        id: 3,
        child: [],
    },
    {
        path: '/myTrucks',
        name: 'myTrucks',
        element: Mytruck,
        meta: {},
        id: 4,
        child: [],
    },
    // {
    //     path: '/myWays',
    //     name: 'myWays',
    //     element: MyWays,
    //     meta: {},
    //     id: 4.1,
    //     child: [],
    // },

    {
        path: '/baggage',
        name: '/baggage',
        element: Baggage,
        meta: {},
        id: 5,
        child: [],
    },
    {
        path: '/trucks',
        name: '/trucks',
        element: Trucks,
        meta: {},
        id: 6,
        child: [],
    },
    {
        path: '/cargo',
        name: '/cargo',
        element: Cargo,
        meta: {},
        id: 7,
        child: [],
    },
    {
        path: '/createway',
        name: '/createway',
        element: CreateWay,
        meta: {},
        id: 8,
        child: [],
    },
];
