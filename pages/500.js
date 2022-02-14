import ErrorMessage from '../components/ErrorMessage'
import Blogpost from '../layouts/Blogpost'

function Custom500() {
  return <ErrorMessage />
}

Custom500.Layout = Blogpost

export default Custom500
