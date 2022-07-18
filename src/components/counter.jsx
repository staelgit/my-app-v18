import React from 'react';

const Badge = ({ value }) => {
   const badgeClasses = `badge m-2 ${
      value === 0 ? 'bg-warning' : 'bg-primary'
   }`;

   return <span className={badgeClasses}>{value || 'empty'}</span>;
};

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
   return (
      <div>
         <span>{name}</span>
         <Badge value={value} />
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
