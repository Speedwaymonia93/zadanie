import React from 'react';
import { useState } from "react";
import { data } from "./data/data";
//import ChecklistItem from "./ChecklistItem";
import "./style/App.css";

const ChecklistItem = React.lazy(() => import('./ChecklistItem'));

const App = () => {
    const [activeItemsCount, setActiveItemsCount] = useState(0);
  
    //Looping over data
    const items = data.map((item) => {
      return (
          <>
          <table className="row checklist-item-container">
        <tbody>
        <tr key={item.id}>
            <td className="cchecklist-item-container_item"><ChecklistItem
          setActiveItemsCount={setActiveItemsCount}
          checked={item.is_unread}
        /></td>
            <td className="checklist-item-container_item id">{item.id}</td>
            <td className="checklist-item-container_item from">{item.from}</td>
            <td className="checklist-item-container_item date">{item.sent_date}</td>
            <td className="checklist-item-container_item">{item.subject}</td>
            <td className="checklist-item-container_item">{item.snippet}</td>
        </tr>
        </tbody>
       
          </table>
          </>

      );
    });
  
    return (
      <>
        <h1>Life Checklist</h1>
        <div>{items}</div>
        <h3>Selected items:  {activeItemsCount -1} </h3>
      </>
    );
  };
  
  export default App;