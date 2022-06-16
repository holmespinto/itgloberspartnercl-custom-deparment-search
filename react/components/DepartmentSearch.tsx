import React,{useState}  from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDeparmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'
import {SearchBar} from 'vtex.store-components'

const DepartmentSearch = () => {
    const [slug, setOption] = useState('');

  const handleChange = (e:any) => {
    const valores =`${e.target.value}/$\{term\&map=ft}`
    setOption(valores);
  };

  const { data, loading } = useQuery(QUERY_VALUE)
  const object=data?.categories;
  return loading
    ?
    <div>loading...</div>
    :
    <>

      <SearchBar CustomSearchPageUrl={slug} placeholder="Que buscar en Vtex?" displayMode='search-end-clear-buttons'/>
      <DepartmentGroup departments={object} handleChange={handleChange} />
    </>
}

//

export default DepartmentSearch
