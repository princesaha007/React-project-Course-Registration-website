

const Cart = ({selectedCourse , readingHr , remainingHr , totalCost}) => {

    return (
        <div>
            <div className="mt-10 w-72 p-2 bg-gray-50 drop-shadow-md h-auto">
               

                

               <div >
                   <div  className="ml-3 text-base  "></div>
                   
                    
                   
               

                   <p  className="text-xl mb-3 font-bold text-blue-500 mt-2">Credit Hour Remaining {remainingHr} hr</p>
                   <hr />

                   <h1  className="text-2xl font-bold mb-3 mt-2">Course Name</h1>
                   <ol>

                    <hr className="mt4 mb-3" />

                {selectedCourse.map((c, index) => (
                    <li key={index}>
                    <span style={{ marginRight: '10px' }}>{index + 1}.</span>{c.name}
                     </li>
                  ))}
                </ol>
                <hr className="mt4 mb-3"/>

                <h1 className="text-xl mt-2 font-semibold">Total Credit Hour : {readingHr}</h1>
                <hr className="mt-2 mb-3" />
                <h1 className="text-xl  font-semibold">Total Price : {totalCost} USD</h1>

               

                   

               </div>
               
           </div>
            
        </div>
    );
};

export default Cart;

