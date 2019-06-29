import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Message, Error } from './styles';
import { getJWT } from './getJWT';
import { postMessageToOpener } from './postMessageToOpener';

// This page will open within the authentication popup,
// triggered by the OAuth callback URL, which should be set to
// `${serverURL}/authenticated`.
//
// When invoked via OAuth, it will have a code attached, like this:
//
// `${serverURL}/authenticated?code=fff33d3da4333abdr4fe`.
//
export const AuthPopupPage = () => {
  // Get the code passed from OAuth out of the URL.
  const { code } = queryString.parse(window.location.search);

  const [errorResponse, setErrorResponse] = useState();

  // Get the JWT token from backend API.
  useEffect(() => {
    getJWT(code).then(data => {
      data.error ? setErrorResponse(data) : postMessageToOpener(data);
    });
  }, [code]);

  return errorResponse ? (
    <Error>{errorResponse.errorDescription}</Error>
  ) : (
    <Message>Signing in...</Message>
  );
};