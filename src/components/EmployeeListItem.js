const EmployeeListItem = (props) => {
  return (
    <>
      <div class="employeeCard section">
        <div class="employeePicture">
          <img src={props.pic} alt="employeeHeadshot" id="silhouette" />
        </div>
        <div class="employeeName">
          <h2>{props.firstName} {props.lastName}</h2>
          <h3>{props.title}</h3>
        </div>
        <div class="employeeDetails">
          <h4><a href="#">{props.email}</a></h4>
        </div>
      </div>
    </>
  )
}

export default EmployeeListItem