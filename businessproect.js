function BusinessLayer() {
  this.dataObject = new DataLayer();

  this.resolveStockExchanges = async () => {

    await this.dataObject.populateStocks();
    var stock_exchanges = this.dataObject.getStocks();

    console.log(stock_exchanges);

    var niza = [];
    var test  = stock_exchanges.stock_exchanges
    for (var i = 0; i < stock_exchanges.stock_exchanges.length; i++) {
      var tempObject = {
        postName: test[i].name,
        postCountry: test[i].country,
        postCity: test[i].city,
        postWeb: test[i].website,
        
      };

      niza.push(tempObject);
    }

    console.log(niza)
    return niza;
  };
}




