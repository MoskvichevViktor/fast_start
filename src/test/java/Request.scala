import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Request {

  // Описываем http запросы
  def getOrders = {

    // Все действия выполняются в блоке exec
    exec(

      // http запрос и в () его название - оно будет в отчёте
      http("getOrders")

        // прописываем http метод в данном случае get
        .get("/noutbuki-planshety-komputery-8/")
        // делаем проверку о том что статус 200
        .check(status.is(200))
    )

  }



}
