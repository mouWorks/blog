module.exports = {
    title: 'blog',
    description: 'MouWorks',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/photo.jpg' }],
        ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    lastUpdated: 'Last Updated',
    themeConfig: {
        nav:[ // 导航栏配置
            {text: 'LifeIsMoney',
                items: [
                    { text: 'WifiCompare', link: '/wifiCompare.html'},
                    { text: 'CoWorkSpaces', link: '/coworkComp.html'},
                ]
            },
            {text: 'TripRelated',
                items: [
                    { text: 'busan', link: '/busan.html'},
                    { text: 'tokyo', link: '/jpTrip.html'},
                ]
            },
        ],
        sidebar: 'auto',
        // sidebar: [
        //   {
        //     title: 'MouWorks',   // required
        //     path: '/',      // optional, which should be a absolute path.
        //     collapsable: true, // optional, defaults to true
        //     sidebarDepth: 1,    // optional, defaults to 1
        //     children: [
        //       '/'
        //     ]
        //   }],
        serviceWorker: {
            updatePopup: true, // Boolean | Object, default to undefined.
            // If set to true, the default text config will be:
            updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
            }
        }
    }
};
