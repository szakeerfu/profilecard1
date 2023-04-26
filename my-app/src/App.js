
import './App.css';
import { Cardanim } from './components/Cardanim';
 
 


function App() {


  return (
    <>
      <div className='cards'> 
       
            <Cardanim 
            productId =   "1"
            productimage =  "https://www.linkpicture.com/q/pngwing.com-4_10.png"
            productName = "NICK"
            Brand =  "NICK"
            productDescription ="GANIGER PURE ACTIVE MICELLER, cleaning water 125ml"
            Price = "7$"

             />
            <Cardanim 
             
            
            productId =   "2"
            productimage =  "https://www.linkpicture.com/q/pngwing.com-6_1.png"
            productName = "NICK"
            Brand =  "ZARA"
            productDescription ="GANIGER PURE ACTIVE MICELLER, cleaning water 125ml"
            Price = "17$"

             />
            <Cardanim 
            
            productId =   "3"
            productimage = "https://www.linkpicture.com/q/pngwing.com-8_2.png"
            productName = "NICK"
            Brand =  "SONTA"
            productDescription ="GANIGER PURE ACTIVE MICELLER, cleaning water 125ml"
            Price = "8$"

             />
         </div>
      




      











    </>
  );
}

export default App;
