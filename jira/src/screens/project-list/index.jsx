import React from "react"
import * as qs from "qs"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useState, useEffect } from "react"
import { cleanObject } from "utils"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  
  useEffect(() => {
    console.log(555, qs.stringify(cleanObject(param)))
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        // 请求成功
        setList(await response.json())
      }
    })
  }, [param])
  
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        // 请求成功
        setUsers(await response.json())
      }
    })
  }, [])
  return <div>
    <List users={users} list={list}></List>
    <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
  </div>
}