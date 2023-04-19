export  const RenderList = () => {
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];

      const data = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        id:3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        id:4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];

      const chemistList = data.filter(item => (item.profession === "chemist"))
      console.log(chemistList)

    return (
        <>
        <ul> {people.map(item => <li key={item}> {item} </li>)} </ul>
        <ul> {chemistList.map(item => <li key={item.id}> {item.name} </li>)} </ul>
        </>

    )
}

//  RenderList