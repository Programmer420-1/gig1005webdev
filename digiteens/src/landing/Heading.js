import React from 'react'
import { useEffect } from 'react'
import styled from "styled-components"
import $ from 'jquery'

const Heading = () => {

    useEffect(() => {
        var $randomnbr = $('.nbr');
        var $timer = 20;
        var $it;
        var $data = 0;
        var index;
        var change;
        var letters = ["U", "N", "R", "A", "V", "E", "L", "L", "I", "N", "G", "T", "H", "E", "B", "I", "T", "S"];

        $randomnbr.each(function () {

            change = Math.round(Math.random() * 100);
            $(this).attr('data-change', change);

        });

        function random() {
            return Math.round(Math.random());
        };

        function select() {
            return Math.round(Math.random() * $randomnbr.length + 1);
        };

        function value() {
            $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
            $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
            $data++;

            $randomnbr.each(function () {
                if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                    index = $('.ltr').index(this);
                    $(this).html(letters[index]);
                    $(this).removeClass('nbr');
                }
            });
        };

        $it = setInterval(value, $timer);
    }, [])

    return (
        <Container>
            <div class="random">
                <div class="heading-content" style={{marginRight: 1 + 'rem'}} >
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                    <span className="nbr ltr text-greenlight3">0</span>
                </div>
                <div class="heading-content" style={{marginRight: 1 + 'rem'}} >
                    <span className="nbr ltr">0</span>
                    <span className="nbr ltr">0</span>
                    <span className="nbr ltr">0</span>
                </div>
                <div class="heading-content">
                    <span className="nbr ltr">0</span>
                    <span className="nbr ltr">0</span>
                    <span className="nbr ltr">0</span>
                    <span className="nbr ltr">0</span>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    color: white;
    font-family: Amiko;
    color: white;
    letter-spacing : 4px;
    font-size : 3rem;
    font-weight : 800;
    text-align: left;
    margin-right: 1.5rem;

    @media(max-width : 1007px){
        margin: 0;
        text-align: center;
        justify-content: space-evenly;
    }

    @media(max-width : 768px){
        margin: 0;
        font-size: 2.5rem;
        text-align: center;
        justify-content: space-evenly;
    }

    @media(max-width : 610px){
        margin: 0;
        font-size: 1.6rem;
        text-align: center;
        justify-content: space-evenly;
    }
`

export default Heading