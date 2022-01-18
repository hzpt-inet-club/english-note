module.exports = {
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
      darkMode: false,
      sidebar: [
        '/guide/grammar.md',
        '/guide/sentence.md',
        '/guide/giant.md',
        '/guide/adjectiveToNoun.md',
        '/guide/adverb.md',
      ],
    },
    
  }