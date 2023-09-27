function Home() {
  return (
    <div className="container mx-auto home h-1 flex-1 bg-white text-black text-lg font-bold">
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
    </div>
  );
}

export default Home;
