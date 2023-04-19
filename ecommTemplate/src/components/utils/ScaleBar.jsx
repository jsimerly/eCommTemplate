import { useEffect, useState } from 'react'
import { Range } from 'react-range'
import colors from '../../../constants/design/colors'


const ScaleBar = ({values, setValues, priceExtrema}) => {
  const [displayValues, setDisplayValues] = useState([0,100])
  useEffect(() => {
    const newValues = [
      values[0] === null ? priceExtrema[0] : values[0],
      values[1] === null ? priceExtrema[1] : values[1],
    ];
    setDisplayValues(newValues)
  }, [priceExtrema, values, setValues]);

    return (
        <div className='pb-8 px-2'>
          <Range
            values={displayValues}
            min={priceExtrema[0]}
            max={priceExtrema[1]}
            step={0.05}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
              >
                <div
                  ref={props.ref}
                  className='rounded-md w-full h-[3px] cursor-pointer'
                  style={{
                    background: `linear-gradient(to right, ${colors.neutralLight} 0%, ${colors.neutralLight} ${
                      ((displayValues[0] - priceExtrema[0]) / (priceExtrema[1] - priceExtrema[0])) * 100
                    }%, ${colors.primary} ${
                      ((displayValues[0] - priceExtrema[0]) / (priceExtrema[1] - priceExtrema[0])) * 100
                    }%, ${colors.primary} ${
                      ((displayValues[1] - priceExtrema[0]) / (priceExtrema[1] - priceExtrema[0])) * 100
                    }%, ${colors.neutralLight} ${
                      ((displayValues[1] - priceExtrema[0]) / (priceExtrema[1] - priceExtrema[0])) * 100
                    }%, ${colors.neutralLight} 100%)`,
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, index }) => (
              <div
                {...props}
                className='border-primary border-2 bg-white h-[16px] w-[16px] rounded-full shadow-md relative outline-none'
              >
                <div 
                    className='absolute -bottom-5 text-[10px] text-tertiary'
                    style={{
                        transform: "translateX(-50%)",
                        left: "50%",
                      }}
                >
                    {displayValues[index].toFixed(0)}
                </div>
              </div>
            )}
          />
        </div>
      );
}

export default ScaleBar