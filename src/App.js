
import { useState } from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Create from './components/Create.js';

import './css/app.css';

export default function App() {

    const [showModal, setShowModal] = useState(false);
    
    const handleShowModal = () => setShowModal(true);
    
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = () => {

        console.log('Submit button clicked');
        // Submit logic goes here
        setShowModal(false);
    }

    return (
        
        <div className="App">

            <Header onCreateClick={handleShowModal} />
            {showModal && <Create handleClose={handleCloseModal} handleSubmit={handleSubmit}/>}

            <Footer />

        </div>

  );

}
