import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import tw, { styled } from 'twin.macro'

function LeaderboardDropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false)
    const options = [ 'Angular', 'React', 'Vue']

    return (
        <div className='lbDropdown' onClick={() => { setIsActive(!isActive) }}>
            <LbDropdownBtn>
                <p>{selected}</p>
                <KeyboardArrowDownIcon />
            </LbDropdownBtn>

            {isActive && (<div className='lbDropdown-content'>
                {options.map(option => (
                    <div onClick={() => { setSelected(option); setIsActive(false) }}
                        className='lbDropdown-item'>{option}</div>
                ))}

            </div>)}

        </div>
    )
}

export default LeaderboardDropdown

const LbDropdownBtn = styled.div`
    ${tw`font-semibold flex justify-between items-center px-5 py-3 mt-5`}
    background-color: #12FFC9;
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
    color: #0A2729;
    cursor: pointer;
`