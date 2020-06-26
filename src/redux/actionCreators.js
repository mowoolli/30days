import * as types from "./types"

const host = "http://worldtimeapi.org/api/timezone"
export const fetchNewTime = (timezone = "PST8PDT") => ({
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString(),
  meta: {
    type: "api",
    url: host + "/" + timezone
  }
})

export const login = (user) => ({
  type: types.LOGIN,
  payload: user
})

export const logout = () => ({
  type: types.LOGOUT
})