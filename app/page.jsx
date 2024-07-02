import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-mid:hidden"/>
        <span className="orange_gradient text-center">Prompts for AI</span>
      </h1>
      <p className="desc text-center">Unleash Creativity Together: Share, Tag, and Discover AI Prompts with the Community!</p>
        <Feed/>
    </section>
  )
}

export default Home
