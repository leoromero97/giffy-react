import React, { Suspense } from "react";
import { useIntersectionNearScreen } from "hooks/useNearScreen";

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
);

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useIntersectionNearScreen({ distance: '80px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  )
}
