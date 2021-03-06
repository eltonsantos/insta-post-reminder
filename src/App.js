import Notifyer from "./Notifyer.js";
import Timer from "./Timer.js";
import Emitter from "./Emitter.js";

const notify = Notifyer.notify({
  title: "Hora do Post",
  body: "Crie algum conteúdo para ajudar a comunidade"
})

const App = {
  async start() {
    try {
      await Notifyer.init();

      Emitter.on("countdown-start", notify);

      Emitter.on("countdown-end", Timer.init );

      Timer.init();

    } catch (error) {
      console.log(error.message);
    }
  },
};

export default App;
