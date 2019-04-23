/***********************园区资讯路由***************************/

// 园区侧边栏公共路口
const parkIndex = resolve => require(['@/views/parkHall/index'],resolve);
const asideComRoot = resolve => require(['@/views/parkHall/asideComRoot/index'],resolve);

const newsInfoSet = resolve => require(['@/pages/bd/information/newsInfoSet'], resolve);// 新园区-资讯公告管理
const publicNews = resolve => require(['@/pages/bd/information/newsInfoSet/publicNews'], resolve);// 新园区-新闻管理页
const publicNotice = resolve => require(['@/pages/bd/information/newsInfoSet/publicNotice'], resolve);// 新园区-新闻管理页
const alllistnews = resolve => require(['@/pages/bd/information/News/allNews/alllistnews'], resolve);//全部新闻
const myfcsnews = resolve => require(['@/pages/bd/information/News/allNews/myfcsnews'], resolve);//我关注的新闻
const allnotice = resolve => require(['@/pages/bd/information/News/notice/allnotice'], resolve);//全部通告
const newsdetail = resolve => require(['@/pages/bd/information/News/allNews/newsdetail'], resolve);//新闻详情页
const noticedetail = resolve => require(['@/pages/bd/information/News/notice/noticedetail'], resolve);//通知公告详情页

// 发布页面公用这个
const publishInformationAnnounce = resolve => require(['@/pages/bd/information/newsInfoSet/publishInformationAnnounce'], resolve);//新闻发布页

const lookNewsAudit = resolve => require(['@/pages/bd/information/newsInfoSet/lookNewsAudit'], resolve);//新闻审核详情页展示
const lookNoticeAudit = resolve => require(['@/pages/bd/information/newsInfoSet/lookNoticeAudit'], resolve);//通知公告审核详情页展示

export default {
    path: '/',
    name: "parkHome",
    component: parkIndex,
    redirect: '/parkHome',
    children:[
        {
            path: "/newsinfo",
            name: "park-newsinfo",
            component: asideComRoot,
            redirect: '/news/alllistnews',
            children: [
                {
                    path: "/news/alllistnews",
                    name: "park-alllistnews",
                    component: alllistnews
                },
                {
                    path: "/news/myfcsnews",
                    name: "park-myfcsnews",
                    component: myfcsnews
                },
                {
                    path: "/news/notice",
                    name: "park-allnotice",
                    component: allnotice
                },
                {
                    path: '/parkHall/manage/newsInfoSet',
                    name: "park-newsInfoSet",
                    component: newsInfoSet,
                    redirect: "/parkHall/manage/publicNews",
                    children: [
                        {
                            path: '/parkHall/manage/publicNews',
                            name: "park-publicNews",
                            component: publicNews
                        },
                        {
                            path: '/parkHall/manage/publicNotice',
                            name: "park-publicNotice",
                            component: publicNotice
                        }
                    ]
                },
            ]
        },
        {
            path: "/news/newsdetail",
            name: "park-newsdetail",
            component: newsdetail,
        },
        {

            path: "/news/noticedetail",
            name: "park-noticedetail",
            component: noticedetail,


        },
        {
            path: "/news/addNews",
            name: "park-addNews",
            component: publishInformationAnnounce,
        },
        {
            path: "/news/lookNewsAudit",
            name: "park-lookNewsAudit",
            component: lookNewsAudit,
        },
        {
            path: "/news/lookNoticeAudit",
            name: "park-lookNoticeAudit",
            component: lookNoticeAudit,
        }
   ]
 };