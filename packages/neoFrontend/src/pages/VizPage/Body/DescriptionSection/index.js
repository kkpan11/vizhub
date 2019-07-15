import React from 'react';
import {
  Wrapper,
  Left,
  Right,
  Authorship,
  AuthorAvatar,
  AuthorName,
  AuthorshipMeta,
  Video,
  VideoThumbnail,
  Description,
  SemiBold,
  VizLink,
  Author
} from './styles';

export const DescriptionSection = () => (
  <Wrapper>
    <Left>
      <Authorship>
        <Author>
          <AuthorAvatar>Avatar</AuthorAvatar>
          <AuthorName>Author name</AuthorName>
        </Author>
        <AuthorshipMeta>
          <div>
            Lasted Edited <SemiBold>June 5, 2019</SemiBold>
          </div>
          <div>
            Forked from <VizLink to="/">Name of forked viz</VizLink>{' '}
            <SemiBold>January 6, 2018</SemiBold>
          </div>
        </AuthorshipMeta>
      </Authorship>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Description>
    </Left>
    <Right>
      <Video>
        <VideoThumbnail />
        Video title
      </Video>
    </Right>
  </Wrapper>
);