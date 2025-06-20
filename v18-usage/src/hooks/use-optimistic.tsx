import React from "react";

const fetchFn = (isFollow: boolean) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.5 ? res(true) : rej();
    }, 1000);
  });
};

const Son = ({
  followState,
  setFollowState,
}: {
  followState: any;
  setFollowState: any;
}) => {
  const [optmisticFollowState, setOptmisticFollowState] = React.useOptimistic(
    followState,
    (o, isFollowing: boolean) => {
      return {
        isFollowing,
        isPending: true,
      };
    }
  );

  const handleClick = (isFollow: boolean) => {
    setOptmisticFollowState(isFollow);
    fetchFn(isFollow)
      .then((res) => {
        setFollowState({
          isFollowing: isFollow,
          isPending: false,
        });
      })
      .catch(() => {
        setFollowState({
          isFollowing: !isFollow,
          isPending: false,
        });
      });
  };
  return (
    <div>
      我是尤雨溪
      <button
        disabled={optmisticFollowState.isPending}
        onClick={() => handleClick(!optmisticFollowState.isFollowing)}
      >
        {optmisticFollowState.isFollowing ? "取消关注" : "关注"}
      </button>
      {optmisticFollowState.isPending && (
        <div>
          正在{optmisticFollowState.isFollowing ? "关注" : "取消关注"}...
        </div>
      )}
    </div>
  );
};

export const UseOptimisticDemo = () => {
  const [followState, setFollowState] = React.useState({
    isFollowing: false,
    isPending: false,
  });
  return <Son followState={followState} setFollowState={setFollowState} />;
};
