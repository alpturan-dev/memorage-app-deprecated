import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { useCollections } from '../context/CollectionsContext'


function Collection() {
    const { state } = useLocation();
    const { collections, setCollections } = useCollections();

    const collection = collections.filter((collection) => collection.name === state.collection.name)[0];

    //su an sadece refreshte calisiyor!

    const addWord = (event) => {
        event.preventDefault();
        let value = event.target.elements.valueItem.value;
        let meaning = event.target.elements.meaningItem.value;
        if (value && meaning) {
            let newCollection = collection;
            newCollection.words.push({ value: value, meaning: meaning });
            console.log("collection.words", newCollection.words);
            let newCollections = collections.map(item => {
                if (item.name === newCollection.name) {
                    return newCollection
                }
                return item
            })
            // console.log("newCollections", newCollections);
            setCollections(newCollections)
            // console.log("collections", collections);
            window.localStorage.setItem('collections', JSON.stringify(collections));
            event.target.elements.valueItem.value = "";
            event.target.elements.meaningItem.value = "";
        }
    }
    const deleteWord = () => {

    }
    const deleteWords = () => {

    }

    // //Component mount edildiginde calismasi icin parametreye bos [] dizi gonderiyoruz.
    // //Component unmount oldugunda useEffect icinde return () => diyip istedigimiz islemi gerceklestirebiliriz.
    // useEffect(() => {
    //     const items = JSON.parse(window.localStorage.getItem('collections'));
    //     if (items !== null) {
    //         setWords(items);
    //     }
    //     console.log("location colleciton", state.collection);
    // }, []);

    // //words state'si render edildiginde calismasi icin parametreye words gonderiyoruz.
    // useEffect(() => {
    //     window.localStorage.setItem('words', JSON.stringify(words));
    // }, [words]);

    // const addWord = (event) => {
    //     event.preventDefault();
    //     let value = event.target.elements.valueItem.value;
    //     let meaning = event.target.elements.meaningItem.value;
    //     if (value && meaning) {
    //         setWords([...words, { value: value, meaning: meaning }]);
    //         event.target.elements.valueItem.value = "";
    //         event.target.elements.meaningItem.value = "";
    //         console.log(words);
    //     }
    // }
    // const deleteWords = () => {
    //     setWords([]);
    // }
    // const deleteWord = (value) => {
    //     setWords(words.filter((word) => word.value !== value));
    // }

    return (
        <>
            <Header />
            <section className='lg:mx-36 mx-20 flex flex-col justify-center'>
                <div className='text-xl my-4'>Collection name: {state.collection.name}</div>
                <form className='border rounded my-4 p-5 flex md:flex-row flex-col items-center justify-center' onSubmit={addWord} autoComplete="off">
                    <input className='m-2 rounded px-2 py-4 outline-none focus:outline-body' type="text" name="valueItem" required />
                    <input className='m-2 rounded px-2 py-4' type="text" name="meaningItem" required />
                    <button className="h-1/2 flex flex-row items-center m-1 p-2 border rounded bg-memorize text-white" type="submit">
                        Kelime Ekle
                    </button>
                </form>
                <div id='words'>
                    {collection.words.length !== 0 ? collection.words.map((word, index) =>
                        <div key={index} className="border p-4 my-3 rounded flex flex-col bg-body ">
                            <div className='flex flex-row content-center justify-around'>
                                <div>Kelime: {word.value}</div>
                                <div>Anlamı: {word.meaning}</div>
                                <div className='cursor-pointer' onClick={() => deleteWord(word.value)}>
                                    X
                                </div>
                            </div>
                        </div>
                    ) : <div className='border-b rounded text-base'>Kelime yok!</div>}
                    <button onClick={deleteWords}>Kelimeleri Sil</button>
                </div>
            </section>
        </>
    )
}

export default Collection