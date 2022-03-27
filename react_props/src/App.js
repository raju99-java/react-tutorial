import Card from "./Card";
import Sdata from "./Sdata";

function App(){
    return (
    <>
    <h1 className="heading">List of top 5 Netflix Series</h1>
    
    {
       Sdata.map( (val) => {
       
          return (
             <Card
                key= {val.id}
                imgsrc={val.imgsrc} 
                title={val.title}
                sname={val.sname}
                link={val.link}
              />  );
              
          })
    }
   
</>
    );
}

export default App;