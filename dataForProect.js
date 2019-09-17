function DataLayer() {
  this.persistanceObject = new PeristanceLayer();
  this.stock_exchanges = {};

  this.populateStocks = async () => {
    this.stock_exchanges = await this.persistanceObject.showMeAllStockExchanges(); // ovde e povrzuvanjeto
  };

  this.getStocks = () => {
    return this.stock_exchanges;
  };
}




