import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaList from 'react-icons/lib/fa/list';
import FaTable from 'react-icons/lib/fa/table';

const FilterWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  margin: 0 auto;
`;

const IconListStyled = styled(FaList)`
  margin-right: .4em;
`;

const IconTableStyled = styled(FaTable)`
  margin-right: .4em;
`;

const PostFilter = ({ click }) => (
  <FilterWrapper>
    <FilterContainer>
      <IconListStyled
        size={30}
        onClick={() => click('list')}
      />
      <IconTableStyled
        size={30}
        onClick={() => click('grid')}
      />
    </FilterContainer>
  </FilterWrapper>
);

PostFilter.propTypes = {
  click: PropTypes.func.isRequired,
};

export default PostFilter;
