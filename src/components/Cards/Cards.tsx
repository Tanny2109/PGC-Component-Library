// import React from 'react';
// import { useRef } from 'react';
// // import Flippy, { FrontSide, BackSide } from 'react-flippy';

// // export const Cards: React.FC = (props) => {
// //     const ref = useRef();
// //     return (
// //         <Flippy
// //             flipOnHover={true}
// //             flipOnClick={false}
// //             flipDirection="horizontal"
// //             ref={ref}
// //             style={{ width: '200px', height: '200px' }}
// //         >
// //             <FrontSide style={{ backgroundColor: '#41669d'}}>
// //                 This is front-side of the card <br />
// //                 <img src="https://via.placeholder.com/100x50" alt="front" />
// //             </FrontSide>
// //             <BackSide style={{ backgroundColor: '#175852'}}>
// //                 <p>This is back-side of the card</p>
// //             </BackSide>
// //         </Flippy>
// //     );
// // }

import React from 'react';
import './cards.css';

interface cardsProps {
    image?: string;
    // name: string;
    desc: string;
    title: string;
    style?: object;
    enableButton?: boolean;
}

const Cards: React.FC<cardsProps> = (props) => {
    return (
        <div className="cardContainer" style={props.style}>
            <div className="imageContainer">
                <img src={props.image} className="Image" />
            </div>
            <div className="cardContent">
                <div className="cardTitle">
                    <h3>{props.title}</h3>
                </div>
                <div className="cardDesc">
                    <p>{props.desc}</p>
                </div>
                {props.enableButton ? (
                    <div className="myButtonContainer">
                        <button
                            className="myButton"
                            onClick={() => {
                                alert('Button was clicked!!');
                            }}
                        >
                            More info
                        </button>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

Cards.defaultProps = {
    image: 'https://source.unsplash.com/random/?alaskanmalamute'
};

export default Cards;
