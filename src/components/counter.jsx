import React from 'react';

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
   const formatValue = () => (value === 0 ? 'empty' : value);

   const getBadgeClasses = () => {
      return `badge m-2 ${value === 0 ? 'bg-warning' : 'bg-primary'}`;
   };

   return (
      <div>
         <span>{name}</span>
         <span className={getBadgeClasses()}>{formatValue()}</span>
         <button
            className="btn btn-primary btn-sm m-2"
            onClick={() => onIncrement(id)}
         >
            +
         </button>
         <button
            className="btn btn-primary btn-sm m-2"
            onClick={() => onDecrement(id)}
         >
            -
         </button>
         <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => onDelete(id)}
         >
            Delete
         </button>
      </div>
   );
};

export default Counter;
