import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'

const navItem = ({ pageName }) => {
    const route = pageName.toLowerCase()==='home'?'':pageName.toLowerCase();
    return (
        <NavLink to={"/"+ route} activeStyle>
            <p>{pageName.toUpperCase()}</p>
        </NavLink>
    )
}

const NavLink = styled(Link)`
    cursor : pointer;
    padding : 5px 10px 5px 10px;
    text-decoration: none;

    &.active{
        color: #12FFC9;
    }

    p{
        transition: all 0.4s ease-in-out;
    }

    p:hover {
        color: #12FFC9;
    }

`

navItem.propTypes = {
    pageName: PropTypes.string,
}

export default navItem