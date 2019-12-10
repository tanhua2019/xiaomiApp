import server from '@/config/server'

//首页轮播图
export let getSwiper = (type) => server.get(`/swiper/${type}`);
