import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { FilterWrapper, FilterLabel, FilterInput } from './FilterForm.styled';

const FilterForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = (evt) => {
      dispatch(filterContacts(evt.target.value))
    }

    return (
        <FilterWrapper>
          <FilterLabel>
            Find contacts by Name
            <FilterInput type="text" value={filter} onChange={changeFilter} />
          </FilterLabel>
        </FilterWrapper>
    )
}

FilterForm.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
}

export default FilterForm