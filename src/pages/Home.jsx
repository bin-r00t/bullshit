import Category from "../components/Category";

function Home() {
  return (
    <div className="container mx-auto home  bg-white text-black text-lg font-bold">
      <section className="trending">
        <h1 className="text-3xl text-center my-10">Trending</h1>
        <section className="slide h-[480px] rounded-xl bg-slate-400"></section>
        <section className="article-list mt-7 grid grid-cols-3 auto-rows-[480px] gap-12">
          <div className="article-item rounded-xl bg-slate-400">1</div>
          <div className="article-item rounded-xl bg-slate-400">1</div>
          <div className="article-item rounded-xl bg-slate-400">1</div>
          <div className="article-item rounded-xl bg-slate-400">1</div>
          <div className="article-item rounded-xl bg-slate-400">1</div>
          <div className="article-item rounded-xl bg-slate-400">1</div>
          <div className="article-item rounded-xl bg-slate-400">1</div>
        </section>

        <section className="most-popular-post">
          <h1 className="text-3xl text-center my-10">Most Popular Posts</h1>
          <section className="most-popular-post__list h-96 bg-slate-400 rounded"></section>
        </section>

        <section className="category my-12 flex space-x-5">
          <Category />
          <Category />
        </section>
      </section>
    </div>
  );
}

export default Home;
