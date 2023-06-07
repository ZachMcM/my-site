export default function About() {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-3xl font-semibold">About Me</h3>
      <p className="text-xl text-gray-500 dark:text-gray-400">
        I am a developer and incoming freshmen at Purdue University studying
        computer science. 
        I am currently a Software Engineer Intern at a local non profit, <a className="text-sky-400 hover:text-sky-400/70 duration-500" href="https://miracleflights.org">Miracle Flights</a> where I dabble in frotend development, backend development, and more.
        I started my coding journey bored in quarantine as a
        freshmen in high school, and it has only been upward since. I launched
        my first web app, <a className="text-sky-400 hover:text-sky-400/70 duration-500" href="https://darthvordle.com">Darth Vordle</a>- a Star Wars
        version of Wordle- in 2021. I am interested in game dev, backend
        development, AI, and math which I even plan to add as a dual major. In
        my freetime I love to play basketball, watch anime, movies, and shows,
        and build legos.
      </p>
    </div>
  );
}
