const EmployeeListItem = (props) => {
  return (
    <>
      <div class="employeeCard section">
        <div class="employeePicture">
          <img src="https://images2.imgbox.com/cd/87/jnDoymdD_o.png" alt="employeeHeadshot" id="silhouette" />
        </div>
        <div class="employeeName">
          <h1>Employee Name</h1>
        </div>
        <div class="employeeTitle">
          <h2>Title</h2>
        </div>
      </div>
    </>
  )
}

export default EmployeeListItem