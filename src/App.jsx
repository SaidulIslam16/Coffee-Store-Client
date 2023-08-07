import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);

  return (
    <div className='m-24'>
      <h1 className='text-6xl text-purple-600 text-center my-7'>Order your Coffee Now</h1>
      <div className='grid md:grid-cols-2 gap-4 p-6'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          >
          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
