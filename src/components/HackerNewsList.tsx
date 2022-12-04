import { useEffect, useState } from "react";
import HackerNews from "./HackerNews";

const fetchHackerNewsList = async () => {
  let hackerNewsList: any[] = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    // .then(json => json);
    // console.log(hackerNewsList);
    return hackerNewsList;
}

function HackerNewsList() {
  const [count, setCount] = useState<number>(100);
  const [hackerNewsList, setHackerNewsList]: any[] = useState([]);

  useEffect(() => {
    fetchHackerNewsList().then((res) => {
      setHackerNewsList(res);
    });
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.pageYOffset + 25 >= document.body.offsetHeight) {
        setCount(count => count + 10);
      }
    })
  }, []);

  return (
    <div className="HackerNewsList">
      {hackerNewsList.slice(0, count).map((hackerNews: any) => <HackerNews key={hackerNews.id} id={hackerNews.id} />)}
    </div>
  );
}

export default HackerNewsList;
