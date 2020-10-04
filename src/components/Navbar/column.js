const columns = [
    {
      Header: "Sr. No.",
      accessor: "srno",
      sortable: false,
      show: true,
      displayValue: " Sr. No.",
  
     
    },
    {
      Header: "Suppression List Name",
      accessor: "sln",
      sortable: false,
      show: true,
      displayValue: "Suppression List Name "
    },
    {
      Header: "Last Modified On",
      accessor: "lmo",
      sortable: false,
      show: true,
      displayValue: " Last Modified On"
    },
    {
      Header: "Last Modified By",
      accessor: "lmb",
      sortable: false,
      show: true,
      displayValue: " Last Modified By"
    },
    {
      Header: "Records",
      accessor: "records",
      sortable: false,
      show: true,
      displayValue: " Records "
    },
    {
      Header: "",
      accessor: "icon",
      sortable: false,
      show: true,
      displayValue: " icon "
    }
  ];

  export default columns;