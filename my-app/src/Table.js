import React from "react";
//This component sets up the structure for a table and fills the column names and row names
//depending on which resort

const Table = ({ data, tableIndex }) => {
  return (
    <div class="card text-muted">
      {data[tableIndex].map((item) => (
        <div class="text-muted">
          <h5>{item.title}</h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Ages</th>
                <th scope="col">{item.time1}</th>
                <th scope="col">{item.time2}</th>
                <th scope="col">{item.time3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{item.age1}</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">{item.age2}</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">{item.age3}</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">{item.age4}</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">{item.age5}</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">{item.age6}</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Table;
