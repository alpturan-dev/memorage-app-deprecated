import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCollections } from '../context/CollectionsContext'
import trash from '../assets/trash.svg';

function Collections() {

    const { collections, setCollections } = useCollections();

    const addCollection = () => {
        setCollections(
            [...collections, {
                name: "Franch Words Collections",
                words: [
                    { value: "xd", meaning: "dx" }
                ]
            }])
    }

    const removeCollection = (name) => {
        setCollections(collections.filter((collection) => collection.name !== name))
    }

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <section className='pt-6 flex flex-col justify-center'>
                <div className='w-3/5 mx-auto mb-6 flex justify-around items-center'>
                    <h3 className='w-4/5 text-2xl font-bold my-2'>
                        Your Collections
                    </h3>
                    <button
                        onClick={addCollection}
                        className='w-1/5 text-xl text-center bg-memorize text-white hover:opacity-80 py-4 rounded'>
                        Create New Collection
                    </button>
                </div>
                <div id='collections' className='flex flex-col py-4 items-center gap-2'>
                    {collections.map((collection, index) => (
                        <div
                            className='flex flex-row items-center w-3/5 h-30 my-2 py-4 border border-opacity-5 rounded shadow-2xl'
                            key={index}
                        >
                            <h2 className='w-10/12 text-xl p-3'>
                                {collection.name}
                            </h2>
                            <button
                                onClick={() => {
                                    navigate('/collection', { state: { collections: collections, collection: collection } })
                                }}
                                className='w-1/12 bg-memorize hover:opacity-90 mx-2 py-2 px-4 rounded'>
                                <span className='text-white'>
                                    Open
                                </span>
                            </button>
                            <button
                                onClick={() => removeCollection(collection.name)}
                                className='w-1/12 mx-2 py-2 px-8 text-[#d90429]'>
                                <img src={trash} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Collections



// const storedCollections = JSON.parse(localStorage.getItem("collections")) || [];

//     const [collections, setCollections] = useState(storedCollections);

//     useEffect(() => {
//         const items = JSON.parse(window.localStorage.getItem('collections'));
//         if (items !== null) {
//             setCollections(items);
//         }
//     }, []);

//     //words state'si render edildiginde calismasi icin parametreye words gonderiyoruz.
//     useEffect(() => {
//         window.localStorage.setItem('collections', JSON.stringify(collections));
//     }, [collections]);

//     const addCollection = () => {
//         setCollections([...collections, { name: 'rofl' }]);
//     }

//     const removeCollection = (name) => {
//         setCollections(collections.filter((collection) => collection.name !== name))
//     }