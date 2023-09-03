import { createContext, useContext, useState, useEffect } from "react";

const CollectionsContext = createContext(1);

export const CollectionsProvider = ({ children }) => {

    const storedCollections = [
        {
            name: "Polish Words Collection",
            words: [
                { value: "car", meaning: "araba" },
                { value: "heli", meaning: "copter" }
            ]
        },
        {
            name: "English Words Collection",
            words: [
                { value: "hello", meaning: "merhaba" },
                { value: "hi", meaning: "same" }
            ]
        },
        {
            name: "French Words Collection",
            words: [
                { value: "aloha", meaning: "merhaba" },
                { value: "hola", meaning: "same" }
            ]
        }
    ]

    const [collections, setCollections] = useState(storedCollections);

    useEffect(() => {
        console.log(collections);
    }, [collections])

    const values = {
        collections,
        setCollections
    }

    return (
        <CollectionsContext.Provider value={values}>
            {children}
        </CollectionsContext.Provider>
    )
}

export const useCollections = () => useContext(CollectionsContext)