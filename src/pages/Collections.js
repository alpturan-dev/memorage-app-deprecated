import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Collections() {
    const storedCollections = JSON.parse(localStorage.getItem("collections")) || [];

    const [collections, setCollections] = useState(storedCollections);

    useEffect(() => {
        const items = JSON.parse(window.localStorage.getItem('collections'));
        if (items !== null) {
            setCollections(items);
        }
    }, []);

    //words state'si render edildiginde calismasi icin parametreye words gonderiyoruz.
    useEffect(() => {
        window.localStorage.setItem('words', JSON.stringify(collections));
    }, [collections]);

    const addCollection = () => {
        setCollections([...collections, { name: 'rofl' }]);
    }

    const removeCollection = (name) => {
        setCollections(collections.filter((collection) => collection.name !== name))
    }

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <section className='mx-36 flex flex-col justify-center'>
                <h3 className='text-2xl font-bold my-2 underline'>Your Collections</h3>
                <div id='collections' className='flex flex-col items-center'>
                    {collections.map((collection, index) => (
                        <div className='flex flex-col items-center w-2/3 h-30 border my-2 rounded shadow-md' key={index}>
                            <h2 className='text-xl p-3 w-full text-center border-b'>{collection.name}</h2>
                            <button onClick={() => {
                                navigate('/collection', { state: { collection: collection } })
                            }} className='w-1/3 bg-body m-2 py-2 px-4 rounded'><span className='text-memorize'>Open</span> </button>
                            <button onClick={() => removeCollection(collection.name)} className='w-1/3 bg-memorize m-2 py-2 px-4 rounded text-white'>Remove this collection </button>
                        </div>
                    ))}
                </div>
                <button onClick={addCollection} className='text-xl bg-body text-memorize m-2 py-2 px-4 rounded w-2/3'>Create New Collection</button>
            </section>
        </>
    )
}

export default Collections