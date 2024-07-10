import Item from './Item';

const List = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
      </ul>
    </div>
    
  )
}

export default List;
