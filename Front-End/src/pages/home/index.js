import React, {Component} from 'react';
import Typist from 'react-typist';
import 'react-bootstrap';
import './home.css'

function Home(){
    return (
        <div className="geralHome">
           <Typist>
                <Typist.Delay ms={500} />
                Sejam Todos bem vindo a Boomsell!
            </Typist>
        </div>
    )
}

export default Home;