import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Row_Size = 50;

interface columnProps {
    label: string;
    dataKey: string;
    numeric?: boolean;
    width?: number;
}

const TableColumns = ({ columns }: { columns: columnProps[] }) => (
    <>
        <TableRow component="div" style={{ display: 'flex', width: '100%' }}>
            {columns.map((column, colIndex) => {
                return (
                    <TableCell
                        key={colIndex}
                        component="div"
                        variant="head"
                        align={'center'}
                        style={{
                            height: Row_Size,
                            fontWeight: 'bold',
                            border: '1px solid black',
                            width: '100%'
                        }}
                        scope="col"
                    >
                        {column.label}
                    </TableCell>
                );
            })}
        </TableRow>
    </>
);

export default TableColumns;
