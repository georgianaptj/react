import React, { useState, useEffect } from "react";
import Table from "terra-table";

const PaddingTable = () => {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await res.json();
    let mappedUsers = response.map((item) => {
      let object = {
        key: item.id,
        cells: [
          { key: "cell-0", children: item.id },
          { key: "cell-1", children: item.name },
          { key: "cell-2", children: item.username },
          { key: "cell-3", children: item.email },
          {
            key: "cell-4",
            children: item.address.city,
          },
          { key: "cell-5", children: item.phone },
          { key: "cell-6", children: item.website },
          {
            key: "cell-7",
            children: item.company.name,
          },
        ],
      };

      return object;
    });

    setUsers(mappedUsers);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(users)}</span>
      <hr />
      <Table
        summaryId="compact-table"
        summary="This table has compact padding."
        numberOfColumns={7}
        cellPaddingStyle="compact"
        dividerStyle="both"
        headerData={{
          cells: [
            { id: "header-id", key: "id", children: "Id" },
            { id: "header-name", key: "name", children: "Name" },
            { id: "header-username", key: "username", children: "Username" },
            { id: "header-email", key: "email", children: "Email" },
            { id: "header-address", key: "address", children: "Address" },
            { id: "header-phone", key: "phone", children: "Phone" },
            { id: "header-website", key: "website", children: "Website" },
            { id: "header-company", key: "company", children: "Company" },
          ],
        }}
        bodyData={[
          {
            rows: users,
          },
        ]}
      />
    </div>
  );
};
export default PaddingTable;
