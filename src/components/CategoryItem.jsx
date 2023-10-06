

function CategoryItem(props) {
  return (
    <div className="category-item p-2 py-4 pr-6 rounded-lg flex space-x-3 hover:bg-gray-100 hover:cursor-pointer transition">
      {/* <img src="x" alt="" className="rounded-lg bg-gray-100 w-48 h-24"/> */}
      <div className="rounded-lg bg-slate-400 w-48 h-24"/>
      <div className="item-content flex flex-col space-y-2">
        <h3 className="type-date text-sm select-none">
          <span className="font-bold"> Bussiness, Travel </span>
          -
          <span className="text-gray-400 font-light"> July 2, 2020 </span>
        </h3>
        <h2 className="title text-xl tracking-wide leading-tight">
          You most unhappy customers are your greatest source of learning.
        </h2>
        <div className="author-field flex items-center">
          <span className="avatar mr-4 w-12 h-12 rounded-full bg-slate-400"></span>
          <div className="flex flex-col items-start text-base select-none">
            <h4 className="font-bold leading-tight">Sergy Campbell</h4>
            <h5 className="text-slate-400 font-light leading-tight">25 published post</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem;