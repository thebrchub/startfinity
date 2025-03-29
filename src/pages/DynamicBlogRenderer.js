import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import { MdArrowBackIos } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';

import '../assets/styles/blog_renderer.scss';
import SEO from '../components/SEO';

const DynamicBlogRenderer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogItems, setBlogItems] = useState();

  const URL = 'https://advokat-rasinlic.com/api/blogs/blog';

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((res) => setBlogItems(res));
  }, [URL, id]);

  return (
    <article className="dynamic-blog">
      <SEO
        title={typeof blogItems !== 'undefined' && `Startfinity Navigator Private Limited | ${blogItems[0].blog_subject} | Business Consultancy`}
        keywords={typeof blogItems !== 'undefined' && `${blogItems[0].blog_subject}, business consultancy, Startfinity Navigator, corporate solutions, expert guidance`}
        description={typeof blogItems !== 'undefined' && `${blogItems[0].blog_subject} | Blog | Startfinity Navigator Private Limited, a leading business consultancy offering end-to-end solutions`}
        name="Startfinity Navigator Private Limited | Business Consultancy"
        type="website"
      />
      <h1 className="dynamic-blog-title" id="opsirnije">{blogItems && `${blogItems[0].blog_subject}`}</h1>
      {blogItems && blogItems.map((item) => (
        <div className="dynamic-blog-inner-container" key={item.id}>
          <img src={item.blog_img} alt={item.blog_subject} />
          {HTMLReactParser(item.blog_body)}
          <div className="dynamic-blog-elements">
            <button type="button" onClick={() => navigate(-1)}>
              <MdArrowBackIos />
              {' '}
              Back
            </button>
            <div className="dynamic-blog-date">
              <FcCalendar style={{ width: '25px', height: '25px' }} />
              {`${moment(item.blog_date).format('DD.MM.YYYY.')}`}
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default DynamicBlogRenderer;
