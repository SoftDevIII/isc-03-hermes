import Option from './Option';

function MenuOptions() {
  return (
    <div className='p-2 bg-white rounded-xl font-roboto flex justify-between shadow-2xl gap-16'>
      <Option>Time</Option>
      <Option>Distance</Option>
      <Option>Avenue</Option>
    </div>
  );
}

export default MenuOptions;
