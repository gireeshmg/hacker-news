import React from 'react';
import { render } from '@testing-library/react';
import NewsList from './NewsList';
import { StaticRouter } from 'react-router';

export const posts = {
  "hits": [
    {
      "created_at": "2020-06-07T13:44:03.000Z",
      "title": "Wrath of the Killdozer",
      "url": "https://www.damninteresting.com/the-wrath-of-the-killdozer/",
      "author": "js2",
      "points": 2,
      "story_text": null,
      "comment_text": null,
      "num_comments": 0,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1591537443,
      "_tags": [
        "story",
        "author_js2",
        "story_23447271"
      ],
      "objectID": "23447271",
      "_highlightResult": {
        "title": {
          "value": "Wrath of the Killdozer",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.damninteresting.com/the-wrath-of-the-killdozer/",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "js2",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    },
    {
      "created_at": "2020-06-07T13:41:25.000Z",
      "title": "There's a growing call to defund the police. Here's what it means",
      "url": "https://www.cnn.com/2020/06/06/us/what-is-defund-police-trnd/index.html",
      "author": "MilnerRoute",
      "points": 16,
      "story_text": null,
      "comment_text": null,
      "num_comments": 0,
      "story_id": null,
      "story_title": null,
      "story_url": null,
      "parent_id": null,
      "created_at_i": 1591537285,
      "_tags": [
        "story",
        "author_MilnerRoute",
        "story_23447259",
        "front_page"
      ],
      "objectID": "23447259",
      "_highlightResult": {
        "title": {
          "value": "There's a growing call to defund the police. Here's what it means",
          "matchLevel": "none",
          "matchedWords": []
        },
        "url": {
          "value": "https://www.cnn.com/2020/06/06/us/what-is-defund-police-trnd/index.html",
          "matchLevel": "none",
          "matchedWords": []
        },
        "author": {
          "value": "MilnerRoute",
          "matchLevel": "none",
          "matchedWords": []
        }
      }
    }
  ],
  "nbHits": 2093621,
  "page": 1,
  "nbPages": 50,
  "hitsPerPage": 20,
  "exhaustiveNbHits": false,
  "query": "",
  "params": "advancedSyntax=true&analytics=true&analyticsTags=backend&page=1&tags=story",
  "processingTimeMS": 1
};

const hideHandler = () => {
  console.log('hideHandler clicked');
}

const upVoteHandler = () => {
  console.log('upVoteHandler clicked');
}

test('renders List items', () => {
  const { container } = render(<StaticRouter>
    <NewsList hideHandler={hideHandler} upVoteHandler={upVoteHandler} posts={posts} />
  </StaticRouter>
  );
  expect(container.firstChild).toMatchSnapshot();
});
