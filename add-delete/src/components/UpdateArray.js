import React, {useState} from 'react';

function UpdateArray() {
    const [items, setItems] = useState([]);
    const [friend, setFriend] = useState("Amruta");
    const addFriendToList = () => {
      if (!items.find((item) => item.name === friend)) {
        setItems([...items, { id: items.length, name: friend }]);
      } else {
        alert(`${friend} is already added`);
      }
    };
    return (
      <div>
        <h4>Add to list</h4>
        <input
          type="text"
          value={friend}
          onChange={(event) => setFriend(event.target.value)}
        ></input> <br /><br />
        <button onClick={() => addFriendToList()}>Add friend</button> &nbsp;
        <button onClick={() => window.location.reload()}>Clear List</button><br />
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );

}

export default UpdateArray;