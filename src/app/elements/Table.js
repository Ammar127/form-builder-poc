import React from 'react'

export const Table = ({rows}) => {
    return rows ? (
      <table>
        <tbody>
          {rows.map((student, index) => {
        //  const { id, name, age, email } = student //destructuring
         return (
           <tr key={index}>
             {Object.keys(student).map((obj, index) => {
               return (<td>{student[obj]}</td>)
             })}
           </tr>
         );
      })}
        </tbody>
      </table>
    ) : null;
}
 