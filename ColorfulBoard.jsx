import React from 'react';
import './ColorfulBoard.css'; // Make sure to import your CSS file here

class ColorfulBoard extends React.Component {
  render() {
    const numRows = 2;
    const numCols = 5;

    const tableRows = [];

    for (let i = 0; i < numRows; i++) {
      const cells = [];
      for (let j = 0; j < numCols; j++) {
      cells.push(
        <td key={j} className="colorful-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <circle cx="20" cy="20" r="18" fill="blue" />
          </svg>
        </td>
      );
      }
      tableRows.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div className="colorful-board-container">
      <table className="colorful-board">
        <tbody>
          {tableRows}
        </tbody>
      </table>
      </div>
    );
  }
}

export default ColorfulBoard;
