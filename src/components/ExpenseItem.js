import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>2023.11.19</div>
      <div className='expense-item__description'>
        <h2>Car insurance</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
