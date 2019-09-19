function Presentation() {
  this.business = new BusinessLayer();

  this.displayStocks = async () => {
    var stock_exchanges = await this.business.resolveStockExchanges();
    console.log(stock_exchanges);

    var body = $("body");
    for (var i = 0; i < stock_exchanges.length; i++) {
      var divName = $("<div>").text(stock_exchanges[i].postName);
      var divCountry = $("<div>").text(stock_exchanges[i].postCountry);
      var divCity = $("<div>").text(stock_exchanges[i].postCity);
        //.attr("class", "id");
        var divWeb = $("<div>").text(stock_exchanges[i].postWeb);
        var divDivide = $("<div>").text("*****************************************************************************");
      body.append(divName);
      body.append(divCountry);
      body.append(divCity);
      body.append(divWeb);
      body.append(divDivide);
    }

    $(".id").on("click", event => {
      console.log($(event.target).text());
    });
  };

  document.getElementById("id03").style.color = "blue";
  document.getElementById("id03").style.backgroundColor = "lightblue";
  document.getElementById("id03").style.textAlign = "center";
  document.getElementById("id06").style.color = "blue";
  document.getElementById("id06").style.backgroundColor = "lightblue";
  document.getElementById("id06").style.textAlign = "center";
  // this.displayInput = () => {
  //   var input = $("<input>");
  //   $("body").append(input);
  //   input.keyup((event) => {
  //     console.log($(event.target).val());
  //   });
  // }; 

  function searchFunction() {
    // Declare variables
    var input, filter, stock_exchanges, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    this.txtvalue = tempObject;
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < stock_exchanges.length; i++) {
      a = stock_exchanges[i].postName;
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        stock_exchanges[i].style.display = "";
      } else {
        stock_exchanges[i].style.display = "none";
      }
    }
  }
}




