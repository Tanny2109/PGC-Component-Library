import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableColumns from './TableColumns';

interface colProps {
    label: string;
    dataKey: string;
    numeric?: boolean;
    width?: number;
}

interface dataProps {
    sr: number;
    prodId: number;
    prodName: string;
    dop: string;
    qty: number;
    cost: number;
}

const Row_Size = 40;

const MyTable = ({ colNames, data, ROW_SIZE }: { colNames: colProps[]; data: dataProps[]; ROW_SIZE?: number }) => {
    return (
        <>
            <Table component="div">
                <TableHead component="div" style={{ display: 'flex', width: '100%' }}>
                    <TableColumns columns={colNames} />
                </TableHead>
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <TableBody component="div">
                            <List height={210} width={width} itemCount={data.length} itemSize={Row_Size} itemData={data}>
                                {({ index, data, style }) => (
                                    <div style={style}>
                                        <TableRow
                                            component="div"
                                            style={{
                                                display: 'flex',
                                                height: ROW_SIZE || Row_Size,
                                                justifyContent: 'space-around',
                                                border: '1px solid grey'
                                            }}
                                        >
                                            {Object.entries(data[index]).map(([key]) => (
                                                <TableCell>{data[index][key]}</TableCell>
                                            ))}
                                        </TableRow>
                                    </div>
                                )}
                            </List>
                        </TableBody>
                    )}
                </AutoSizer>
            </Table>
        </>
    );
};

export default MyTable;
