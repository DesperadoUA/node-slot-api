module.exports = {
    CASINO: {
        main: 'casinos',
        meta: 'casino_meta',
        category: 'casino_category',
        relative: {
            category: 'casino_category_relatives'
        },
        inSitemap: true
    },
    PAGES: {
        main: 'pages',
        inSitemap: false
    },
    GAME: {
        main: 'games',
        meta: 'game_meta',
        category: 'game_category',
        relative: {
            category: 'game_category_relatives',
            casino: 'game_casino_relatives'
        },
        inSitemap: true
    }
}