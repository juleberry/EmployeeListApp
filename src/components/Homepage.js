import EmployeeList from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"

const Homepage = (props) => {
  return (
  <>
    <div class="section">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  </>
  )
}

export default Homepage