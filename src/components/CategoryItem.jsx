

function CategoryItem(props) {
  return (
    <div className="category-item border flex space-x-2">
      <img src="x" alt="x" className="rounded bg-gray-300"/>
      <div className="item-content flex flex-col space-y-2">
        <h3 className="type-date text-xl">
          <span className="font-bold">Bussiness, Travel</span>
          ——
          <span className="text-gray-300">July 2, 2020</span>
        </h3>
        <h2 className="title text-xl tracking-wide">
          You most unhappy customers are your greatest source of learning.
        </h2>
        <div className="author-field flex items-center">
          <span className="avatar"></span>
          <div className="flex flex-col items-start">
            <h4 className="font-bold">Sergy Campbell</h4>
            <h5 className="text-gray-300">25 published post</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem;