import React from 'react';

interface IHeaderProps {
    label: string;
}

const Header = ({label} : IHeaderProps) => {
  return (
    <h1>{label}</h1>
  )
}

export default Header