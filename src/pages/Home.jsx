import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Error, Headlines, Input, Loader, MyCard } from '../components'
import { reactCustomQuery } from '../reactCustomQuery/reactCustomQuery'
import conf from '../conf/conf'
import { setNewsArr } from '../slices/NewsSlice'
import { setQuery } from '../slices/QuerySlice'

function Home() {

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()

    const news = useSelector((state) => state.news.newsArr)
    const query = useSelector((state) => state.query.query)

    const [error, loading] = reactCustomQuery(`https://newsapi.org/v2/everything?q=${query}&apiKey=${conf.newsAPIKey}`, setNewsArr , query)

    const handleSearch = (e) => {
        setSearch(e.target.value)
        dispatch(setQuery(search))
    }

    return (
        <>
            <div>
                <div className='flex flex-wrap justify-between my-4 mx-8'>
                    <h2 className='text-center font-bold text-2xl'>Top Headlines</h2>
                    <Input 
                    value={search}
                    onChange={e => handleSearch(e)}
                    />
                </div>
                
                <div className='ml-5 max-h-40 overflow-auto'>
                    <Headlines />
                </div>
            </div>
            <div className='bg-gray-800 h-1 my-4'></div>

            {error && 
                <div className='m-10 flex justify-center'>
                    <Error error={error}/>
                </div>
            }

            {loading && 
                <div className='m-10 flex justify-center'>
                    <Loader />
                </div>
            }

            <div className='flex flex-wrap justify-evenly mt-2'>
                
                
                {news.length > 0 ? 
                    news.map((newNews, index) => (
                        newNews.title === "[Removed]" ? null :
                         <div key={index} className='w-80'>
                            <MyCard news={newNews}/>
                        </div> 
                    )) : null}
            </div>
        </>
    )
}

export default Home


