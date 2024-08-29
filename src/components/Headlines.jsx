import { List, ListItem } from "flowbite-react";
import { useSelector } from "react-redux";
import {setHeadlines} from '../slices/HeadlineSlice'
import { reactCustomQuery } from "../reactCustomQuery/reactCustomQuery";
import conf from "../conf/conf";
import { Loader, Error } from ".";

export default function Headlines() {

    const headlines = useSelector((state) => state.headline.headlines)
    const query = useSelector((state) => state.query.query)

    const [error, loading] = reactCustomQuery(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${conf.newsAPIKey}`, setHeadlines, query)

  return (
    <>
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

        <List>
            {headlines.length > 0 ? 
                headlines.map((headline, idx) => (
                    headline.title === "[Removed]" ? null :
                    <div key={idx}>
                        <a href={headline.url} target="_blank">
                            <ListItem>{headline.title}</ListItem>
                        </a>
                    </div>
                ))
        : null }
        </List>
    </>
    
  );
}
