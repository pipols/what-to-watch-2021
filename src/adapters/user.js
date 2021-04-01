import {extend} from "../utils/utils";

export const adapterUser = (user) => {
  const result = extend(
      user,
      {
        avatarUrl: user.avatar_url,
      }
  );

  delete result.avatar_url;

  return result;
};
