import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => state[NAME_SPACE].authorizationStatus;
export const getUserData = (state) => state[NAME_SPACE].userData;
