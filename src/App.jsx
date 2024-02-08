import React from 'react';
import MainLayout from './layouts/MainLayouts';
import Route from './routes';

export default function App() {
    return (
        <div className=" h-24 max-w-[1240px] mx-auto ">
            <MainLayout>
                <Route />
            </MainLayout>
        </div>
    );
}
