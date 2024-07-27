
const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <button type="button" onClick={() => onRemoveItem(item)}>
      Dismiss
    </button>
  </li>
);

export default Item;
