import { useEffect, useState } from "react";
import StyledHackerNews from "./StyledHackerNews";

type hackerNews = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

// fetch individual story
const fetchHackerNews = async (id: number) => {
  let hackerNews: hackerNews = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                                     .then(response => response.json());
  return hackerNews;
}

function HackerNews({id}: {id: number}) {
  // news
  const [hackerNews, setHackerNews] = useState<any>({});

  // fetch individual story when component is loaded
  useEffect(() => {
    fetchHackerNews(id).then((res) => {
      setHackerNews(res)
    });
  }, []);

  return (
    <div className="HackerNews">
      <StyledHackerNews title={hackerNews.title} author={hackerNews.by} url={hackerNews.url}></StyledHackerNews>
    </div>
  );
}

export default HackerNews;
