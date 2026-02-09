import React from 'react'
import Section1 from './components/Section1/Section1'
import Home from './components/homepage/home'
import { Routes,Route } from 'react-router-dom'
import Signin from './components/Section1/Signin'
import Signup from './components/Section1/Signup'
import ForgotPassword from './components/Section1/ForgetPage';
import CountryCars from './components/Cars/CountryCars';


const App = () => {

const users =[
{img:'https://images.unsplash.com/photo-1616790037607-46c67331a33b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'Explore Premium German Brands cars known for performance ,engineering ,and luxury such as BMW,Audi,Mercedes-Benz , and Porsche',
  color:'#FF7F50',
  tag:'German Brand',
  textColor:'WHITE',
},
{img:'https://plus.unsplash.com/premium_photo-1708996793887-eaae07a03b5f?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'Explore iconic Italian car brands celebrated for exotic design, high-performance engines, and racing heritage, including Ferrari, Lamborghini, Maserati, and Alfa Romeo.',
  color:'#6C5CE7',
  tag:'Itlay Brands',
   textColor:'black ',
},
{img:'https://images.unsplash.com/photo-1629897045592-3629125e0353?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
intro:'Explore Swedish car brands known for world-leading safety, clean Scandinavian design, and advanced engineering, such as Volvo, Polestar, and Koenigsegg.',
color:'#2D3436', 
tag:'Sweden Brands',
 textColor:'#00CEC9',
},
{img:'https://images.unsplash.com/photo-1652709830696-1e88c2d9247b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'Explore Indian automotive brands focused on affordable engineering, rugged performance, and growing innovation, such as Tata Motors and Mahindra.',
  tag:'Indian Brands',
  color:'#FFFFFF',
   textColor:'black',
},
{img:'https://images.unsplash.com/photo-1664783856972-ac9922d7b2d3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'Explore Japanese car brands recognized for reliability, advanced technology, and performance, such as Toyota, Honda, Nissan, Lexus, and Subaru.',
  tag:'Japan Brands',
  color:'pink',
   textColor:'BLACK',
},
{img:'https://images.unsplash.com/photo-1673734582682-45de496c7500?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'Explore American car brands famous for muscle power, innovation, and electric leadership, such as Ford, Chevrolet, Tesla, and Dodge.',
  tag:'US Brands',
  color:'black'
},
{img:'https://images.unsplash.com/photo-1543142706-872c378745ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'Explore French car brands known for innovative design, comfort, and engineering creativity, including Renault, Peugeot, Citroën, and Bugatti.',
  tag:'France Brands',
  color:'lightgreen',
   textColor:'black',
},{
  img:'https://images.unsplash.com/photo-1696233016084-30c8345d85ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro:'Explore British luxury and performance car brands known for handcrafted elegance and motorsport excellence, including Rolls-Royce, Bentley, Aston Martin, and McLaren.',
  tag:'UK Brands',
  color:'royalblue',
   textColor:'#2D1B1B'
}


]


  return (

    <div>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/section1' element={<Section1 users={users}/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/country/:country" element={<CountryCars />} />
 
        
      </Routes>
      
    {/* <Section2/> */}
    </div>
  )
}

export default App