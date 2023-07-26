import React from 'react'

type CustomersPageProps = {
    children?: React.ReactNode
}

const CustomersPage: React.FC<CustomersPageProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default CustomersPage