function PeristanceLayer() {
    
    this.showMeAllStockExchanges = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://api-v2.intrinio.com/stock_exchanges?api_key=OjExN2RhNzE5YmE5YmI4ZDUyYjNkMmRmZTFhYjJiMGVj",
                type: "GET",
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });
    };

    (function (f, i, n, t, e, c, h) {
    f['IntrinioWidgetsObject'] = e; f[e] = f[e] || function () {
        (f[e].q = f[e].q || []).push(arguments)
    }, f[e].l = 1 * new Date(); c = i.createElement(n),
        h = i.getElementsByTagName(n)[0]; c.async = 1; c.src = t; h.parentNode.insertBefore(c, h)
    })(window, document, 'script', 'https://widget-api-cdn.intrinio.com/intrinio-widgets.min.js', 'iw');
    iw('initialize', { userId: '2095ee9f024bec25b2f64facab4199b7bdd1271613906cd7b5125229f23d654b' });
}