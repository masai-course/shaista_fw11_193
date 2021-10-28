import { Card } from './components/Card';
import './App.css';

function App() {
  return (
    <div>
      <Card date={"28/10/2020"} logo={"https://cdn-cf.cfo.com/content/uploads/2015/01/Amazon-icon.png"}
        heading={"Amazon Gift"}
        subheading={"PAY"}
        color={"rgb(228, 173, 23)"}
        devices={"Desktop - Mobile"} />

        
      <Card date={"17 sep 2020"} logo={"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"}
        heading={"Apple Gift"}
        subheading={"Payment"}
        color={"white"}
        devices={"Macos - Mobile"} />

      <Card date={"28/10/2020"} logo={"https://cdn-cf.cfo.com/content/uploads/2015/01/Amazon-icon.png"}
        heading={"Amazon Gift"}
        subheading={"PAY"}
        color={"rgb(228, 173, 23)"}
        devices={"Desktop - Mobile"} />
     


    </div>
  );
}

export default App;