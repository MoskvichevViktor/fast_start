import io.gatling.core.Predef._
import Request._
import io.gatling.core.feeder.BatchableFeederBuilder

object Simulation {

  // опишем наш сценарий - дадим имя сценарию
  def getOrdersScen = scenario("first scenario")

    // в блоке exec укажем имя нашего запроса
    .exec(getOrders)
    // добавляем второй написанный нами запрос - post
    .exec(postOrder)


}
