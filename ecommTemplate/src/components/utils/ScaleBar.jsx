import { useState } from 'react'
import { Range } from 'react-range'
import colors from '../../../constants/design/colors'


const ScaleBar = ({values, setValues}) => {

    return (
        <div className='pb-8 px-2'>
          <Range
            values={values}
            min={0}
            max={100}
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
                      values[0]
                    }%, ${colors.primary} ${values[0]}%, ${colors.primary} ${
                      values[1]
                    }%, ${colors.neutralLight} ${values[1]}%, ${colors.neutralLight} 100%)`,
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
                    {values[index].toFixed(0)}
                </div>
              </div>
            )}
          />
        </div>
      );
}

export default ScaleBar