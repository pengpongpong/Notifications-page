import "./App.sass"
import Footer from "./Footer/Footer";
import Notifications from "./Notification_holder/Notifications"

function App() {
  return (
    <div className="App">
      <Notifications />
      <Footer/>
    </div>
  );
}

export default App;
