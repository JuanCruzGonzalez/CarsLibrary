import { useState } from 'react';

export default function FilteredList({ onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState('Last release');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Pasar la opción seleccionada de vuelta al componente padre (Cars)
    onOptionChange(selectedValue);
  };

  return (
    <div className="absolute right-[10%] top-[16%] md:relative">
      <select name="filterCars" id="FilterCars" onChange={handleSelectChange} className='border-2 border-black rounded'>
        <option value="Last release">Last relaest</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="Higest Price">Higest Price</option>
        <option value="Lowest Price">Lowest Price</option>
        <option value="Higest Kilometers">Higest Kilometers</option>
        <option value="Lowest Kilometers">Lowest Kilometers</option>
      </select>
    </div>
  );
}
