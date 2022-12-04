import { useEffect, useState } from "react";
import HackerNews from "./HackerNews";
import Loading from "./Loading";

const fetchHackerNewsList = async () => {
  let hackerNewsList: any[] = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
                                    .then(response => response.json())
                                    // .then(json => json);
  // console.log(hackerNewsList);
  return hackerNewsList;
}

function HackerNewsList() {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const [count, setCount] = useState<number>(100);
  const [hackerNewsList, setHackerNewsList]: any[] = useState([]);

  useEffect(() => {
    fetchHackerNewsList().then((res) => {
      setHackerNewsList(res);
      setIsAppReady(true);
    });
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.pageYOffset + 50 >= document.body.offsetHeight) {
        setCount(count => count + 10);
      }
    })
  }, []);

  return (
    <div className="HackerNewsList">
      
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
