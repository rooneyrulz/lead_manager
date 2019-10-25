import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import LeadModal from './modals/LeadModal';
import LeadItem from './common/LeadItem';

// REDUX
import { connect } from 'react-redux';
import { getLeads } from './../actions/lead';

const Lead = ({ lead: { loading, leads }, getLeads }) => {
  useEffect(() => {
    getLeads();
  }, [getLeads]);

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
      <br />
      <br />
      <div className='lead-content'>
        {loading ? (
          <h1>Loading...!</h1>
        ) : leads.length < 1 ? (
          <p>No leads found yet...</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridGap: '1rem'
            }}
          >
            {leads.map(lead => (
              <LeadItem key={lead.id} lead={lead} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Lead.propTypes = {
  lead: PropTypes.object.isRequired,
  getLeads: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lead: state.lead
});

export default connect(
  mapStateToProps,
  { getLeads }
)(Lead);
