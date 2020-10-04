import React, { useState } from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import InfiniteScroll from "react-infinite-scroll-component";
import makeData from "./makeData";

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid rgba(0,0,0,0.2);
    width: 90rem;
    border-left: none;
   
    :nth-child(even){
        background-color: rgba(0,0,0,0.2)
    }
    

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(even){
        background-color: rgba(213,213,213, 0.2)
    }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      

      :last-child {
        border-right: 0;
      }
      
    }
   
  }
`;

function Table({ columns, data, update }) {
  // Use the state and functions returned from useTable to build your UI

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy }
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  React.useEffect(() => {
    console.log("sort");
  }, [sortBy]);

  // Render the UI for your table
  return (
    <InfiniteScroll
      dataLength={rows.length}
      next={update}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </InfiniteScroll>
  );
}

function ProcessingQue() {
  const [items, setItems] = useState(makeData(40));

  const columns = React.useMemo(
    () => [
      {
        Header: "Information",
        columns: [
          {
            Header: "Input records",
            accessor: "firstName"
          },
          {
            Header: "Valid records",
            accessor: "lastName"
          },
          {
            Header: "Actions",
            accessor: "age"
          },
          {
            Header: "By",
            accessor: "visits"
          },
          {
            Header: "List",
            accessor: "status"
          }
        ]
      },
      {
        Header: "Status",
        columns: [
         
          {
            Header: "Profile Progress",
            accessor: "progress"
          }
        ]
      }
    ],
    []
  );

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(items.concat(makeData(2)));
    }, 1500);
  };

  const data = React.useMemo(() => items, [items]);
  return (
    <Styles>
      <Table columns={columns} data={data} update={fetchMoreData} />
    </Styles>
  );
}

export default ProcessingQue;