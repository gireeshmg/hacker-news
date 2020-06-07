import React from 'react';
import { render } from '@testing-library/react';
import ListItem from './ListItem';

const post = {
  author: "js2",
  comment_text: null,
  created_at: "2020-06-07T13:44:03.000Z",
  created_at_i: 1591537443,
  num_comments: 0,
  objectID: "23447271",
  parent_id: null,
  points: 2,
  story_id: null,
  story_text: null,
  story_title: null,
  story_url: null,
  title: "Wrath of the Killdozer",
  url: "https://www.damninteresting.com/the-wrath-of-the-killdozer/"
}

const hideHandler = () => {
  console.log('hideHandler clicked');
}

const upVoteHandler = () => {
  console.log('upVoteHandler clicked');
}

test('renders List items', () => {
  const { container } = render(<table><tbody>
    <ListItem hideHandler={hideHandler} upVoteHandler={upVoteHandler} post={post} />
  </tbody>
  </table>
  );
  expect(container.firstChild).toMatchSnapshot()
});
