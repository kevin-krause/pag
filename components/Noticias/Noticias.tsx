import React, { useLayoutEffect } from 'react'

const Noticias = () => {
    const news = React.createRef()
    const autor = React.createRef()

    const apiKey = '5ae38324e75747a386e6d3619f403bab'

    useLayoutEffect(() => {
        Promise.all([
            fetch(
                `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${apiKey}`
            ).then(response => response.json())
        ])
    }, [])

    return (
        <>
            <div className="lg:col-span-2 col-span-1  flex justify-between w-full border  hover: p-4 rounded-lg bg-zinc-800 transition delay-30 duration-100 border-zinc-500 hover:border-zinc-100  ">
                <div className="flex flex-col w-full pb-4">
                    <p ref={news} className="text-2xl text-gray-100 font-bold">
                        Notícia
                    </p>
                    <a
                        id={autor}
                        href=""
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 pt-1 transition delay-30 duration-100 hover:text-green-200 mr-auto"
                    >
                        Notícia completa
                    </a>
                </div>
            </div>
        </>
    )
}

export default Noticias
