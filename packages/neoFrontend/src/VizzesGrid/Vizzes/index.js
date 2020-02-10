import React, { useEffect, useCallback } from 'react';
import { VizPreviews, VizPreview } from '../../VizPreview';
import { LoadingScreen } from '../../LoadingScreen';
import { Wrapper } from './styles';

// Trigger infinite scroll when the user gets 100px away from the bottom.
const distanceFromBottomTrigger = 100;

export const Vizzes = ({
  visualizationInfos,
  paginate,
  usersById,
  isFetchingNextPage
}) => {
  useEffect(() => {
    const onScroll = () => {
      const distanceFromBottom =
        document.body.offsetHeight - (window.innerHeight + window.scrollY);
      if (distanceFromBottom < distanceFromBottomTrigger) {
        paginate.current();
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [paginate]);

  const getUser = useCallback(id => usersById[id], [usersById]);

  return (
    <Wrapper>
      {visualizationInfos.length !== 0 ? (
        <VizPreviews className="test-page-viz-previews">
          {visualizationInfos.map(vizInfo => (
            <VizPreview
              key={vizInfo.id}
              vizInfo={vizInfo}
              ownerUser={getUser(vizInfo.owner)}
            />
          ))}
        </VizPreviews>
      ) : null}
      {isFetchingNextPage ? <LoadingScreen isChild={true} /> : null}
    </Wrapper>
  );
};