import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import CircularLoader from '../components/CircularLoader/CircularLoader';
import Sidenav from '../components/Sidenav/Sidenav';
import Cards from '../components/Cards/Cards';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, MemoryRouter } from 'react-router-dom';
import MyTable from '../components/Table';

const stories = storiesOf('App', module).addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

stories.add('Table', () => {
    const menuItemsList = [
        { name: 'Twitter', link: 'https://twitter.com' },
        { name: 'Facebook', link: 'https://facebook.com' },
        { name: 'Google', link: 'https://google.com' }
    ];

    const myData = [
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 2,
            prodId: 102,
            prodName: 'Item 12',
            qty: 340,
            cost: 70,
            dop: '29-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 2,
            prodId: 102,
            prodName: 'Item 12',
            qty: 340,
            cost: 70,
            dop: '29-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 2,
            prodId: 102,
            prodName: 'Item 12',
            qty: 340,
            cost: 70,
            dop: '29-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        },
        {
            sr: 1,
            prodId: 101,
            prodName: 'Item 1',
            qty: 100,
            cost: 50,
            dop: '30-06-2022'
        }
    ];

    const COLUMNS = [
        { label: 'Sr. No', dataKey: 'sr' },
        {
            label: 'Product ID',
            dataKey: 'prodId'
        },
        { label: 'Product Name', dataKey: 'prodName' },
        {
            label: 'Quantity',
            dataKey: 'qty'
        },
        { label: 'Cost', dataKey: 'cost' },
        { label: 'Date of Purchase', dataKey: 'dop' }
    ];

    return (
        <>
            <div style={{ border: '1px solid black', width: '100%' }}>
                <p style={{ fontWeight: 'bold', fontSize: '40px' }}>Circular loader component: </p>
                <div style={{ marginLeft: '50%', marginBottom: '20px' }}>
                    <CircularLoader height={50} width={100} color={'red'} label={'loading'} />
                </div>
            </div>
            {/* <Routes>
                <Route path="http://localhost:6006/?path=/story/app--table" element={<Sidenav items={menuItemsList} />} />
            </Routes> */}
            <div>
                <Sidenav items={menuItemsList} />
            </div>
            <div style={{ margin: '50px' }}>
                <Cards title="trial testing" desc="lorem ipsum fponaefn ainfafanfnaw oanvaen;aenf;ae " image="https://source.unsplash.com/random/?labrador" enableButton={true} />
            </div>
            <div style={{ margin: '50px 0px 50px 50px', border: '2px solid black' }}>
                <MyTable colNames={COLUMNS} data={myData} />
            </div>
        </>
    );
});
