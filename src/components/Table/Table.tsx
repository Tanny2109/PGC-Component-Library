// import React from "react";
// import { ReactDOM } from "react";
// import {FixedSizeGrid as Grid} from 'react-window';
// import './table.css';

// interface CellProps {
//     colIndex: number,
//     rowIndex: number,
//     style?: object,
//     entryName: string
// }

// const OwnCell = ({colIndex}:{colIndex:any}, {rowIndex}:{rowIndex:any}, {style}:{style:object}) => (
//     <div 
//     className={
//         colIndex % 2
//         ? rowIndex % 2 === 0
//           ? 'GridItemOdd'
//           : 'GridItemEven'
//         : rowIndex % 2
//           ? 'GridItemOdd'
//           : 'GridItemEven'
//     }
//     style={style}>
//         r{rowIndex}, c{colIndex}
//     </div>
// );

// export const Table = () => {
//     return (
//         <Grid
//             className="Grid"
//             columnCount={100}
//             columnWidth={10}
//             height={150}
//             width={300}
//             rowCount={100}
//             rowHeight={50}
//         >
//             {OwnCell}
//         </Grid>
//     )
// } 