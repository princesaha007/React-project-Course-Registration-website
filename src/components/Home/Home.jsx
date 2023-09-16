/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import dollarSignImage from '../../Images/dollar-symbol.png';




const Home = () => {

  const [courses, setCourses] = useState([])

  const [selectedCourse ,setSelectedCourse] =useState([])

  const [readingHr , setReadingHr] = useState(0);
  const [remainingHr , setRemainingHr] =useState(20);
  const [totalCost, setTotalCost] = useState(0);


    useEffect(()=>{

        fetch('./api.json')
        .then((res)=> res.json())
        .then ((data)=>setCourses(data))
    }, [])




    const handleAddCourse = (course)=>{
        const alreadyExist = selectedCourse.find((sc) => sc.id == course.id);

        let count = course.reading_time;
        let cost = course.price;


        if(alreadyExist){
            return alert ('already exist');
        }
        else{
            selectedCourse.forEach((item)=>{
                count = count + item.reading_time ;
                cost = cost + item.price
            })

            

            if(count>20){
                return alert ('no hr left')
            }
            else{


                setReadingHr(count);

                const remaining = 20- count;
                setRemainingHr(remaining)

                setTotalCost(cost);
    
                const addSelectedCourse =[...selectedCourse , course];
                setSelectedCourse(addSelectedCourse);
            }

        }

    }




    return (
        <div>
            <div className='flex gap-14'>
            <div className='courses-container'>

                {
                    courses.map((c) =>(
                        <div className=" rounded-md  shadow-xl drop-shadow-lg mt-9 ml-10 home">
                        <div className=" mx-auto  rounded-md">
                            <div className="px-2 pt-2 rounded-xl ">
                                <img className='h-40 w-80'  src= {c.picture} />
                            </div>
            
                        </div>
                        
                        <div >
                         
                          <p className="font-bold mt-2 ml-4">{c.name}</p>
                          <p className='ml-4 '>{c.description}</p>
                            <div className="flex gap-24">
                                <div className='flex items-center justify-center gap-0 content-center ml-3'>
                                    <img className='img-dollar' src={dollarSignImage} alt="" />

                                    <h2 className="  font-normal text-black text-lg ">  Price: {c.price} </h2>
                                </div>
                                
                                <div>
                                     <p className='text-lg font-light '>Credit: {c.reading_time}hr</p>
                                </div>
            
                            </div>
                            <button  onClick = {()=>handleAddCourse(c)}  className="bg-blue-500 h-8 text-white rounded-md w-72 ml-4 mt-5">Select</button>
                          
            
                            </div>
                          </div>
                    ))
                }

            </div>

            <div>
                <Cart selectedCourse={selectedCourse}
                readingHr={readingHr}
                remainingHr={remainingHr}
                totalCost={totalCost}></Cart>
                
            </div>



        
        </div>
        </div>




        

    );
};

export default Home;