import { gql } from "@apollo/client";

export const GET_ALL_PROJECT=gql`
query{
  getAllProject{
    id
    name
    taskList{
      id
      title
      startDate
      endDate
      assignees
      description
      taskPriority
      attachment
    }
  }
}
`