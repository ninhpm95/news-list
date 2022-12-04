import { useEffect, useState } from "react";
import HackerNews from "./HackerNews";
import Loading from "./Loading";

// fetch top stories
const fetchHackerNewsList = async () => {
  let hackerNewsList: any[] = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
                                    .then(response => response.json());
  return hackerNewsList;
}

function HackerNewsList() {
  // check if the stories have been fetched (display loading icon if not)
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  // count the number of stories displayed (used for infinite scroll)
  const [count, setCount] = useState<number>(100);
  // top stories
  const [hackerNewsList, setHackerNewsList]: any[] = useState([]);

  useEffect(() => {
    // fetch top stories when the component is loaded
    fetchHackerNewsList().then((res) => {
      setHackerNewsList(res);
      setIsAppReady(true);
    });

    // Infinite scroll
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.pageYOffset + 53 >= document.body.offsetHeight) {
        setCount(count => count + 10);
      }
    })
  }, []);

  return (
    <div className="hacker-news-list">
      {
        isAppReady ?
        hackerNewsList.slice(0, count).map((hackerNews: any) => <HackerNews key={hackerNews} id={hackerNews} />)
        :
        <Loading />
      }
    </div>
  );
}

export default HackerNewsList;
