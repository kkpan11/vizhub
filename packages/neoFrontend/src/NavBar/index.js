import React, { useContext } from 'react';
import { withTheme } from 'styled-components';
import { withRouter } from 'react-router';
import { LogoSVG } from '../svg';
import { AuthContext, AUTH_PENDING } from '../authentication';
import { Banner } from '../styles';
import { SignIn, LogoLink } from './styles';
import { UserActionsMenu } from './UserActionsMenu';

export const NavBar = withRouter(
  withTheme(({ theme, location }) => {
    const { navbarItemHeight, navbarLogoColor } = theme;
    const { me, signIn } = useContext(AuthContext);

    return (
      <Banner>
        {location.pathname === '/' ? (
          <LogoSVG height={navbarItemHeight} fill={navbarLogoColor} />
        ) : (
          <LogoLink to="/">
            <LogoSVG height={navbarItemHeight} fill={navbarLogoColor} />
          </LogoLink>
        )}

        {me === AUTH_PENDING ? null : me ? (
          <UserActionsMenu />
        ) : (
          <SignIn className="test-sign-in" onClick={signIn}>
            Sign up / Sign in
          </SignIn>
        )}
      </Banner>
    );
  })
);