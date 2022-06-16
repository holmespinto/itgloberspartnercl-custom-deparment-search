

type Props = {
  departments: Array<Category>,
  handleChange:any,
};
type Category={
id:number,
name:string,
slug:string
}
const DepartmentGroup =({departments,handleChange}:Props) => {
  const departmentsOptions: any=departments.map((departments:Category) => {
  return (
    <option
    value={departments.slug}
    key={departments.id}>{departments.name}
    </option>
    )
})

return (
  <div className="border p-3 mt-4 mt-lg-0 rounded">
  <select defaultValue="value0"  onChange={handleChange}style={{ maxHeight: '350px', width: '100%' }} className="react-select">
 <option
    disabled
    value="value0">Seleccione una opción
    </option>
    {departmentsOptions}
  </select>
  </div>
)
}

export default DepartmentGroup
