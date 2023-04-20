import { useState } from "react";

export default function BucketList() {
  const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
  ];

  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function ItemList({myList, onToggle}) {
    return (
      <ul>
        {myList.map((item) => {
          return (
            <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.seen} onChange={(e) => {onToggle(item.id, e.target.checked)}}/>
              </label>
              {item.title}
            </li>
          );
        })}
      </ul>
    );
  }

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map(artwork => {
        if (artwork.id === artworkId) {
          console.log(artworkId)
          return {...artwork, seen: nextSeen}
        } else {
          return artwork;
        }
      })
    )
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map(artwork => {
        if (artwork.id === artworkId) {
          return {...artwork, seen: nextSeen}
        } else {
          return artwork
        }
      })
    )
  }

  return (
    <div>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList myList={myList} onToggle={handleToggleMyList}/>
      <h2>Your list of art to see:</h2>
      <ItemList myList={yourList} onToggle={handleToggleYourList}/>
    </div>
  );
}
