import { useEffect, useState } from "react";

type hackerNews = {
  id: number;
  name: string;
  body: string;
  postId: number;
  email: string;
}

const fetchHackerNews = async (id: number) => {
  let hackerNews: hackerNews = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(response => response.json())
    // .then(json => json);
// console.log()hackerNews;
return hackerNews;
}

function HackerNews({id}: {id: number}) {
  const [hackerNews, setHackerNews] = useState<any>({});

  useEffect(() => {
    fetchHackerNews(id).then((res) => {
      setHackerNews(res)
    });
  }, []);

  return (
    <div className="HackerNews">
      {hackerNews.id} {hackerNews.name}
    </div>
  );
}

export default HackerNews;
