import checkIcon from '../assets/check.svg';

const Item = ({ item, onRemoveItem }) => (
  <li className='item'>
    <span style={{ width: '40%' }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: '30%' }}>{item.author}</span>
    <span style={{ width: '10%' }}>{item.num_comments}</span>
    <span style={{ width: '10%' }}>{item.points}</span>
    <span style={{ width: '10%' }}>
      <button 
        type="button" 
        onClick={() => onRemoveItem(item)}
        className='button button-small'
        >
        <img src={checkIcon} alt="check icon" height='18px' width='18px' />
      </button>
    </span>
  </li>
);

export default Item;
