function Presentation() {
  this.business = new BusinessLayer();

  this.displayStocks = async () => {
    var stock_exchanges = await this.business.resolveStockExchanges();
    console.log(stock_exchanges);

    var body = $("body");
    for (var i = 0; i < stock_exchanges.length; i++) {
      var divName = $("<div>").text(stock_exchanges[i].postName);
      var divCountry = $("<div>").text(stock_exchanges[i].postCountry);
      var divCity = $("<div>").text(stock_exchanges[i].postCity)
        .attr("class", "id");
        var divWeb = $("<div>").text(stock_exchanges[i].postWeb);
      body.append(divName);
      body.append(divCountry);
      body.append(divCity);
      body.append(divWeb);
    }

    $(".id").on("click", event => {
      console.log($(event.target).text());
    });
  };
}




