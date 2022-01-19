module.exports = {
    base: "/english-note/",
    // 站点配置
    lang: 'zh-CN',
    title: '英语语法笔记',
    description: '从0开始学习英语语法',

    locales: {
      '/': {
        lang: 'zh-CN',
        title: '英语语法',
        description: '从0开始学习英语语法',
      },
    },

    themeConfig: {
      docsRepo: 'https://github.com/hzpt-inet-club/english-note',
      docsBranch: 'master',
      docsDir: 'docs',
      editLinkPattern: ':repo/edit/:branch/:path',
      contributors: false,
      logo: "/logo/logo.svg",
      repo: "hzpt-inet-club/english-note",
      darkMode: false,
      sidebar: [
        '/guide/grammar.md',
        '/guide/sentence.md',
        '/guide/giant.md',
        '/guide/adjectiveToNoun.md',
        '/guide/adverb.md',
        '/guide/preposition.md',
        '/guide/compare.md',
      ],
    },
    
  }
