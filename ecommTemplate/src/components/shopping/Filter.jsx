import CloseIcon from '@mui/icons-material/Close';
import CheckboxFilter from './CheckboxFilter';

const Filter = ({closeFunc, checkFilterOptions, setCheckFilterOptions, checkForFilterApplied}) => {

    return (
      <div 
        className='bg-white rounded-md p-2 min-w-[300px]'
      >
        <div className='flex justify-between'>
          <p className='text-[20px]'>
            Filter Options
          </p>
          <CloseIcon
            onClick={() => closeFunc(false)}
            className='hover:scale-105 cursor-pointer'
          />
        </div>
        <CheckboxFilter
          setCheckFilterOptions={setCheckFilterOptions}
          checkFilterOptions={checkFilterOptions}
          checkForFilterApplied={checkForFilterApplied}
        />
      </div>
    )
  };

export default Filter
