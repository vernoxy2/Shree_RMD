import React from 'react';

const Department = () => {
  return (
    <div className='bg-primary/10 py-20'>
        <div className='container space-y-12'>
            <h1 className='text-center'>Categories department</h1>
            <div className='flex gap-8'>
              <div className='flex-1 py-20 bg-primary/80'></div>
              <div className='w-2/12 hover:flex-1 py-20 bg-primary/60'></div>
              <div className=' w-2/12 hover:flex-1 py-20 bg-primary/40'></div>

            </div>

        </div>
      
    </div>
  );
}

export default Department;
