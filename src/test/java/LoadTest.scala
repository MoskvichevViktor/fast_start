import io.gatling.core.Predef._
import Simulation._
import io.gatling.http.Predef.http

class LoadTest extends Simulation {

  // Описываем конфигурацию http - в частности базовый url
  val httpConf = http.baseUrl("https://computer-database.gatling.io")

  // Опишем нашу нагрузочную стратегию в методе setUp
  setUp(

    // Укажем какой сценарий хотим выполнить (getOrderScen)
    // заинжектим наших пользователей
    getOrdersScen.inject(

      // укажем стратегию нагрузки
      //в каждую секунду подаётся определённое количество пользователей на протяжении указанного времени
      constantUsersPerSec(100) during(5)
    ).protocols(httpConf) // .используем ранее описанный протокол
  )

}