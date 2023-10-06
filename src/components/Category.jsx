import CategoryItem from "./CategoryItem";

function Category(props) {
  const items = [
    {
      id: 1,
      type: "Bussiness, Travel",
      date: "July 20, 2020",
      title: "You most unhappy customers are your greatest source of learning.",
      author: {
        name: "Bill Gates",
        avatar: "https://i.pravatar.cc/300?img=1",
        posts: "25 published post",
      },
    },
    {
      id: 2,
      type: "Bussiness, Travel",
      date: "July 20, 2020",
      title: "You most unhappy customers are your greatest source of learning.",
      author: {
        name: "Bill Gates",
        avatar: "https://i.pravatar.cc/300?img=1",
        posts: "25 published post",
      },
    },
    {
      id: 3,
      type: "Bussiness, Travel",
      date: "July 20, 2020",
      title: "You most unhappy customers are your greatest source of learning.",
      author: {
        name: "Bill Gates",
        avatar: "https://i.pravatar.cc/300?img=1",
        posts: "25 published post",
      },
    },
  ];
  return (
    <div className="category bg-red-200 w-full">
      <h2 className="category-title font-bold text-2xl">Sports</h2>
      <div className="category-content flex flex-col space-y-5">
        {items.map((item) => (
          <CategoryItem
            key={item.id}
            type={item.type}
            date={item.date}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
