import React, { Suspense, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const Index = () => {
    const renderRoutesRecursive = (router) =>
        router.map((val) =>
            val?.children && val?.children?.length ? (
                <React.Fragment key={val?.id}>
                    {<Route path={val?.path} element={<val.element />} />}
                    {renderRoutesRecursive(val?.children)}
                </React.Fragment>
            ) : (
                <React.Fragment key={val?.id}>
                    <Route path={val?.path} element={<val.element />} />
                </React.Fragment>
            ),
        );
    const memoRender = useMemo(() => renderRoutesRecursive(routes), [routes]);
    return (
        <Suspense>
            <Routes>{memoRender}</Routes>
        </Suspense>
    );
};

export default Index;
