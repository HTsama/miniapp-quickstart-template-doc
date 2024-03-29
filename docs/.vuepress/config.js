/**
 * @Description
 * @author 张晓龙 <2467365764@qq.com>
 * @copyright 2020
 * @Date 2020-10-12 16:26:44
 * @FilePath /miniapp-quickstart-template-doc/docs/.vuepress/config.js
 */

module.exports = {
  title: 'app文档',
  description: '欢迎访问miniapp说明文档',
  base: '/miniapp-quickstart-template-doc/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`,
      },
    ],
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    sidebarDepth: 4,
    sidebar: [
      {
        title: 'app结构',
        collapsable: true,
        children: ['/structure/'],
      },
      {
        title: 'UI组件',
        collapsable: true,
        children: ['/components/u-body/', '/components/u-nav/'],
      },
      {
        title: '工具类',
        collapsable: true,
        children: [
          '/utils/formatTime/',
          '/utils/networkStatus/',
          '/utils/authSetting/',
          '/utils/getSystemInfo/',
          '/utils/throttle/',
          '/utils/rpxToPx/',
          '/utils/pxToRpx/',
          '/utils/deBounce/',
          '/utils/formatRichText/',
          '/utils/getValue/',
          '/utils/userLogin/',
          '/utils/returnInterface/',
          '/utils/sticky/',
          '/utils/getObj/',
          '/utils/null2str/',
          '/utils/thour/',
        ],
      },
    ],
  },
};
