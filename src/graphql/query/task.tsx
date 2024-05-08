import { gql } from "@apollo/client";

export const GET_ALL_TASK=gql`
query{
getAllTask{
  id
  title
  startDate
  endDate
  assignees
  project{
    name
  }
  description
  taskPriority
  attachment
}
}
`