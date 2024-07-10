import Item from './Item';

const List = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
      </ul>
    </div>
    
  )
}

export default List;
