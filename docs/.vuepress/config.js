module.exports = {
    // base: '/snail-climb/',
    base: '/',
    title: 'Snail-Climb',
    description: '个人博客：我要一步一步往上爬，在最高点乘着叶片往前飞',
    head: [
        ['link', {rel: 'icon', href: '/icon.svg'}]
    ],
    host: '0.0.0.0',
    port: 80,
    dest: 'dist',
    themeConfig: {
        logo: '/icon.svg',
        // repo: 'https://gitee.com/snail-climb/daning-docs-vuepress.git',
        nav: [
            {text: 'Home', link: '/'},
            {
                text: '我有话要对你说！',
                items: [
                    {text: '今天虽然很忙！', link: '/'},
                    {text: '但依然很想你！', link: '/'}
                ]
            },
            {text: 'Gitee', link: 'https://gitee.com/snail-climb'},
            {text: 'GitHub', link: 'https://github.com/snail-climb'},
        ],
        sidebar: [
            {
                title: '笔记',
                collapsable: true,
                children: [
                    'note/Windows-shortcut-key',
                    'note/DOS-basic-commands',
                    'note/markdown-grammar',
                    'note/Spring-Cloud-note',
                    'note/快速搭建LAMP环境',
                    'note/基于ECS搭建云上博客',
                ]
            },
            {
                title: 'Linux',
                collapsable: true,
                children: [
                    'note/linux/Linux指令-文本处理',
                    'note/linux/Linux指令-系统管理',
                    'note/linux/Linux指令-磁盘管理',
                    'note/linux/Linux指令-文件与权限',
                    'note/linux/Linux指令-文件管理',
                ]
            },
            {
                title: '代码模板',
                collapsable: true,
                children: [
                    'note/code-template/mybatis-xml-template',
                    'note/code-template/leetcode-plugin-template',
                ]
            },
        ],
        sidebarDepth: 2,
        search: true,
        searchMaxSuggestions: 10,
        prevLinks: true,
        nextLinks: true,
        smoothScroll: true,
    },
    markdown: {
        lineNumbers: true
    },
}