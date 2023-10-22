import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Request {

  // Описываем http запросы - пример для get запроса
  def getOrders = {
    // Все действия выполняются в блоке exec
    exec(
      // http запрос и в () его название - оно будет в отчёте
      http("getOrders")
        // прописываем http метод в данном случае get
        .get("/computers")
        // делаем проверку о том что статус 200
        .check(status.is(200))
    )
  }

  // Описываем http запросы - пример для post запроса
  def postOrder = {

    // Все действия выполняются в блоке exec
    exec(
      // http запрос и в () его название - оно будет в отчёте
      http("CreateNewComputer")
        .post("/computers")

        .formParam("name", "GatlingComputer1")
        .formParam("introduced", "2020-01-01")
        .formParam("discontinued", "2020-02-02")
        .formParam("company", "1")

        .check(status.is(200))
    )
  }


}
