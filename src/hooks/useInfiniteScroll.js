import { useState, useEffect } from "react";

const useInfiniteScroll = () => {

  const [page, setPage] = useState(1)
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    console.log(scrollTop, 'scrollTop');
    console.log(scrollHeight, 'scrollHeight');
    console.log(clientHeight, 'clientHeight');
    if (scrollTop + clientHeight + 10 >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [page]);

  return page;
};

export default useInfiniteScroll;