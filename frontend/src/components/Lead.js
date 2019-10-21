import React from 'react';

import LeadModal from './modals/LeadModal';

const Lead = () => {
  return (
    <div className='Lead'>
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h1 className='m-0'>Leads</h1>
        <div className='lead-modal'>
          <LeadModal />
        </div>
      </header>
      <div className='lead-content'>Leads...</div>
    </div>
  );
};

export default Lead;
