export const fetchPageData = async (vizId, offset) => {
  const url = `/api/visualization/get/${vizId}/forks?offset=${offset}`;
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
  });
  return await response.json();
};

export const fetchVizPageData = async (vizId) => {
  const response = await fetch(`/api/visualization/get/${vizId}`, {
    method: 'GET',
    credentials: 'same-origin',
  });
  return await response.json();
};
