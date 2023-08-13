import React from "react";

function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> </th>
          <th scope="col" className= {"column-2"}>Username</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
    {data &&
      data.map((player, index) => (
        <tr key={index}>
          <td className={`score-${index + 1}`}>{index + 1}</td>
          <td className={`score-${index + 1}`} id={`username-id`}>{player.username}</td>
          <td className={`score-${index + 1} score-custom` }>{player.score.toLocaleString()}</td>

        </tr>
      ))}
</tbody>

    </table>
  );
}

export default Table;
