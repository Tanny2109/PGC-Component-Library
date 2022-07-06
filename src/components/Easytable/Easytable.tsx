import React from 'react';
import MUIDataTable from 'mui-datatables';

const options = {
    download: false,
    expandableRowsHeader: false,
    viewColumns: false,
    filter: false,
    filterArrayFulMatch: false,
    print: false,
    search: false,
    sort: false,
    sortFilterList: false
};

const Easytable = (props: any) => {
    return <MUIDataTable title={props.title} data={props.data} columns={props.columns} options={options} />;
};

export default Easytable;
