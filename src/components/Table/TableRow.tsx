import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ownCell = (props: { data: { [x: string]: any }; index: string | number }) => {
    const item = props.data[props.index];

    return item.map((it: any) => {
        <TableRow component="div">
            <TableCell
                key={item.Srno}
                component="div"
                variant="body"
                align={'right' || 'left'}
                // style={{
                //   flexBasis:false,
                //   height: Row_Size
                // }}
            >
                {item[it]}
            </TableCell>
        </TableRow>;
    });
};

export default ownCell;
