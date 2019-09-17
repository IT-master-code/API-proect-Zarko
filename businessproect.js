function BusinessLayer() {
  this.dataObject = new DataLayer();

  this.resolveStockExchanges = async () => {

    await this.dataObject.populateStocks();
    var stock_exchanges = this.dataObject.getStocks();

    console.log(stock_exchanges);

    var niza = [];
    for (var i = 0; i < stock_exchanges.length; i++) {
      var tempObject = {
        postName: stock_exchanges[i].name,
        postCountry: stock_exchanges[i].country,
        postCity: stock_exchanges[i].city,
        postWeb: stock_exchanges[i].website,
        
      };

      niza.push(tempObject);
    }

    return niza;
  };
}




