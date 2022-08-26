import React from "react";

interface IProps {
  examName: string;
  board: string;
  year: number;
  gpa: number;
  group: string;
}

function TableRow({ examName, board, year, gpa, group }: IProps) {
  return (
    <tr className="border text-center">
      <td className="border-r">{examName}</td>
      <td className="border-r"> {board} </td>
      <td className="border-r"> {group} </td>
      <td className="border-r"> {year} </td>
      <td> {gpa} </td>
    </tr>
  );
}

export default TableRow;
