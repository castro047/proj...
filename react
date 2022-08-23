//styles /css
import {Fragments,useState} from "react";
import './App.css';

import City from "./asset/city.jpg";
import Paissagem from "./asset/paissagem.jpg"
import ManegeData from "./components/ManegeData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  /*const name ="Joaquim"*/
    const [userName] = useState("Maria");

const cars =[
  {id:1,brand:"ferrari",color:"amarela",newCar:true,km:0},
  {id:2,brand:"Kia",color:"bramco",newCar:false,km:34343},
  {id:3,brand:"Renauld" ,color:"Azul", newCar: false,km: 234},
]

  return (
    <div className="App">
      <h1>avançando em React!</h1>
      <div>
        <img src={City}alt="Cidade" />
        </div> 
        <div>
          <img src={Paissagem}alt="Paissagem" />
          </div>
          <ManegeData />
          <ListRender />
          <ConditionalRender />
          {/*props*/}
          <ShowUserName name={userName} />
          {/* destructuring*/}
          <CarDetails brand="VW" km={1001} color="azul"newCar={false}/>
          {/*reaproveitando */}
          <CarDetails brand="ford" color="vermelho" km={0} newCar={true}/>
          <CarDetails brand="fiat" color="preto" km={4500} newCar={false}/>
          {/*loop em array de objt */}
          {cars.map((car)=>(
            <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
            />
          ))}
          {/*Fragment */}
          <Fragments propFragments="Teste"/>
    </div>
  );
}

export default App;
