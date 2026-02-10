import React from 'react'
import Section1 from './components/Section1/Section1'
import Home from './components/homepage/Home'
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
  img: 'https://images.unsplash.com/photo-1714438064209-7c509b0fb69b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro: 'Explore South Korean car brands known for modern design, advanced technology, and strong value, including Hyundai, Kia, and Genesis.',
  color: '#0A3D62',
  tag: 'Korean Brands',
  textColor: 'white',
},
{
  img: 'https://images.unsplash.com/photo-1727098353953-929512ce7b90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ5ZHxlbnwwfHwwfHx8MA%3D%3D',
  intro: 'Explore Chinese car brands rapidly growing in electric vehicles and smart mobility, including BYD, NIO, Geely, and XPeng.',
  color: '#E84393',
  tag: 'China Brands',
  textColor: 'white',
},
{
  img: 'https://images.unsplash.com/photo-1620163510571-2d5e8501e2d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D',
  intro: 'Explore Brazilian automotive brands and manufacturing hubs focused on flexible fuel technology and mass-market vehicles.',
  color: '#009432',
  tag: 'Brazil Brands',
  textColor: 'white',
},
{
  img: 'https://images.unsplash.com/photo-1678869598977-bb5c3f5795b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3VwcmF8ZW58MHx8MHx8fDA%3D',
  intro: 'Explore Spanish automotive brands blending performance and design heritage, including SEAT and CUPRA.',
  color: '#C0392B',
  tag: 'Spain Brands',
  textColor: 'white',
},
{
  img: 'https://images.unsplash.com/photo-1550615162-ed342f474ebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNrb2RhfGVufDB8fDB8fHww',
  intro: 'Explore Czech car brands known for reliability and engineering excellence, led by Škoda.',
  color: '#145A32',
  tag: 'Czech Brands',
  textColor: 'white',
},
{
  img: 'https://images.unsplash.com/photo-1728472804219-0b23a40e7ae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFjaWF8ZW58MHx8MHx8fDA%3D',
  intro: 'Explore Romanian car brands focused on affordability and rugged performance, especially Dacia.',
  color: '#1E272E',
  tag: 'Romania Brands',
  textColor: 'white',
},
{
  img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1935&auto=format&fit=crop',
  intro: 'Explore Australian automotive heritage known for powerful sedans and utility vehicles, including Holden and Ford Australia.',
  color: '#273C75',
  tag: 'Australia Brands',
  textColor: 'white',
},
{
  img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1935&auto=format&fit=crop',
  intro: 'Explore Canadian automotive manufacturing excellence, supporting major global brands with advanced production and EV innovation.',
  color: '#B71540',
  tag: 'Canada Brands',
  textColor: 'white',
},
,{
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