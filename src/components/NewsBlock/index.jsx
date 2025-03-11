import React, { useEffect, useState } from "react";
import { News } from "./News";
import styles from "./styles.module.css";
import { client } from "../../client/init";
import { PET_RETURNED_SUBSC } from "../../client/subscriptions";
import { useLocalStorage } from "../../functions/useLocalStorage";

export const NewsBlock = () => {
  const [news, setNews] = useLocalStorage("pet_news", []);
  const [visibleNews, setVisibleNews] = useState(false);
  const show_news = () => {
    news.length > 0 && setVisibleNews(true);
  };

  useEffect(() => {
    const subs = client
      .subscribe({
        query: PET_RETURNED_SUBSC,
      })
      .subscribe((data) => {
        const newsEvent = data.data.petReturned;
        setNews((prev) => [...prev, newsEvent]);
      });

    return () => {
      subs.unsubscribe();
    };
  }, []);

  return (
    <>
      <div className={styles.news_wrapper} onClick={show_news}>
        <div className={styles.news}>news</div>
        {news.length > 0 && !visibleNews && (
          <div className={styles.news_amount}>{news.length}</div>
        )}
      </div>

      {visibleNews && news.length > 0 && (
        <News news={news} setVisible={setVisibleNews} setNews={setNews} />
      )}
    </>
  );
};
