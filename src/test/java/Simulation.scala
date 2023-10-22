import io.gatling.core.Predef.scenario
import Request._

object Simulation {

  // опишем наш сценарий - дадим имя сценарию
  def getOrdersScen = scenario("first scenario")

    // в блоке exec укажем имя нашего запроса
    .exec(getOrders)


}
