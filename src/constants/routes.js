import { ListPage, MapPage, DayPage } from '../pages'

const ROUTES = [
  {
    path: '/',
    name: '💊주변 약국 목록',
    component: ListPage,
    exact: true,
    navigation: true,
  },
  {
    path: '/map',
    name: '🗺지도로 보기',
    component: MapPage,
    exact: true,
    navigation: true,
  },
  {
    path: '/day',
    name: '💸구매 가능 요일',
    component: DayPage,
    exact: true,
    navigation: true,
  },
]

export default ROUTES
