import {request} from "./request";

export function getHomeMutidata() {
  return request({
    url: '/home/mutidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
