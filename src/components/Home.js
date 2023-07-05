import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'Rick and Morty',
            language: 'en',
            apiKey: '6e9d49176f78493fbd33752cfbb2c966'
          }
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="home-content">
      <div className="main-content">
        <iframe
          title="Rick and Morty Live Stream"
          src="https://www.adultswim.com/player?id=jqX79_YeQkm3I9kHJYGAXA"
          width="100%"
          height="300px"
          frameBorder="0"
        ></iframe>
        <h1>About Rick and Morty</h1>
        <p>
          Rick and Morty is an animated science fiction sitcom created by Justin Roiland and Dan Harmon. The show first premiered in 2013 and has gained a massive following for its unique blend of dark humor, intricate storytelling, and mind-bending sci-fi concepts.
        </p>
        <p>
          The series follows the adventures of Rick Sanchez, an eccentric and alcoholic scientist, and his good-hearted but easily influenced grandson Morty Smith. Together, they traverse different dimensions, encounter bizarre creatures, and get involved in all sorts of intergalactic shenanigans. Rick, with his brilliant mind and disregard for rules, takes Morty on wild and dangerous escapades that often push the boundaries of reality.
        </p>
        <p>
          What sets Rick and Morty apart is its ability to balance humor and nihilistic themes with moments of deep philosophical reflection. The show often explores existential questions, the nature of existence, and the consequences of scientific discovery. It challenges viewers to contemplate their place in the universe and the moral implications of their choices.
        </p>
        <p>
          Alongside the captivating storytelling, the show features a talented voice cast, led by Justin Roiland, who voices both Rick and Morty. The animation style is distinct, with vibrant visuals and imaginative designs that bring the varied dimensions and characters to life.
        </p>
        <p>
          Rick and Morty has garnered critical acclaim and a dedicated fanbase for its intelligent writing, complex characters, and the ability to seamlessly blend humor and thought-provoking themes. It has received numerous awards and nominations, solidifying its place as one of the most popular animated series of recent years.
        </p>
        <br />
        <p>
          <h1>Rick and Morty Timeline</h1>

          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-date">1997</div>
              <div class="timeline-content">
                Creation of characters Rick Sanchez and Morty Smith.
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-date">2006</div>
              <div class="timeline-content">
                Justin Roiland and Dan Harmon meet and start collaborating on projects.
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-date">2013</div>
              <div class="timeline-content">
                Development of Rick and Morty begins.
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-date">2013-2014</div>
              <div class="timeline-content">
                Season 1 of Rick and Morty airs, introducing the audience to the dimension-hopping adventures of Rick and Morty.
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-date">2015-2017</div>
              <div class="timeline-content">
                Season 2 and Season 3 of Rick and Morty are released, gaining a huge following and critical acclaim.
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-date">2019-Present</div>
              <div class="timeline-content">
                Season 4 and Season 5 of Rick and Morty air, continuing the wild and unpredictable adventures of the duo.
              </div>
            </li>
          </ul>
        </p>
        <h1>About the Creator of Rick and Morty</h1>
        <h2>Creator: Justin Roiland and Dan Harmon</h2>
        <p>Justin Roiland and Dan Harmon are the creative minds behind Rick and Morty. Justin Roiland is an American voice actor, animator, writer, and producer. He provides the voices for both Rick Sanchez and Morty Smith in the show. Dan Harmon is an American writer, producer, and comedian. He is known for creating the television series "Community" and co-creating "Rick and Morty" alongside Roiland.</p>
        <h2>A Word from the Creator</h2>
        <p>"We set out to make something different, something that didn't feel like anything else. We didn't want to pander or dumb it down in any way, and we wanted to have fun with it. We wanted to challenge ourselves and the audience. We wanted to take risks, experiment, and push the boundaries. And most importantly, we wanted to tell compelling stories that would resonate with people on a deeper level. We're incredibly grateful for the amazing fan base that has embraced the show and supported us throughout the journey." - Justin Roiland and Dan Harmon</p>
        <h1>Rick and Morty Merch – OFFICIAL Rick and Morty Store</h1>
        <iframe
          title="Rick and Morty Live Stream"
          src="https://rickandmortyshop.com/"
          width="100%"
          height="30%"
          frameBorder="0"
        ></iframe>
        <h1>Rick and Morty Live Action Movie - Trailer </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/b57Weqj13e0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='live-action movie'></iframe>
      </div>
      <div className="news-section">
        <h2>Latest Rick and Morty News</h2>
        {news.slice(0, 10).map((article, index) => (
          <div key={index} className="news-article">
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
