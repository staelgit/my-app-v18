import React, { useState } from 'react';
import Counter from './counter';

const initialStateCounters = [
   { id: 0, value: 0, name: 'Ненужная вещь' },
   { id: 1, value: 1, name: 'Ложка' },
   { id: 2, value: 2, name: 'Вилка' },
   { id: 3, value: 3, name: 'Тарелка' },
   { id: 4, value: 4, name: 'Набор минималиста' },
];

const CountersList = () => {
   const [counters, setCounters] = useState(initialStateCounters);

   const handleDelete = (id) => {
      const newStateCounters = counters.filter((counter) => counter.id !== id);
      setCounters(newStateCounters);
   };

   const handleReset = () => {
      setCounters(initialStateCounters);
   };

   const handleChangeValue = (value) => (id) => {
      setCounters((prevState) =>
         prevState.map((counter) => {
            if (counter.id === id) counter.value += value;
            return counter;
         })
      );
   };

   const handleIncrement = handleChangeValue(1);
   const handleDecrement = handleChangeValue(-1);

   return (
      <>
         {counters.map((counter) => (
            <Counter
               key={counter.id}
               onDelete={handleDelete}
               onIncrement={handleIncrement}
               onDecrement={handleDecrement}
               {...counter}
            />
         ))}
         <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
            Сброс
         </button>
      </>
   );
};

export default CountersList;
