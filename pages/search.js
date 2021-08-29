//front-end
import Header from '../components/header/Header'
import Footer from '../components/feed/Footer'
//back-end
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import SearchResult from '../components/search-result/SearchResult'
import Map from '../components/map/Map'

function Search ({ searchResults }) {
  const router = useRouter()
  //ES6 Destructuring
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className='h-screen scrollbar-hide'>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className='flex '>
        <section
          className='
        flex-grow 
        pt-14 
        px-6 
        '
        >
          <p className='text-xs'>
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1
            className='
            text-3xl 
            font-semibold 
            mt-2 
            mb-6'
          >
            Stays in {location}
          </h1>

          <div
            className='
          hidden 
          lg:inline-flex 
          mb-5 
          space-x-3 
          text-gray-800 
          whitespace-nowrap'
          >
            <p className='searchOptions'>Cancellation Flexibility</p>
            <p className='searchOptions'>Type of Place</p>
            <p className='searchOptions'>Price</p>
            <p className='searchOptions'>Rooms and Beds</p>
            <p className='searchOptions'>More filters</p>
          </div>
          <div className='flex flex-col'>
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                total,
                star,
                price,
                long,
                lat
              }) => (
                <SearchResult
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  total={total}
                  star={star}
                  price={price}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>
        <section className='hidden lg:inline-flex lg:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps () {
  //get the server side objets
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    res => res.json()
  )

  return {
    props: {
      searchResults
    }
  }
}
