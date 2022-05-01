const PTag = ({ text }) => {
  return (
    <p className="mr-3 text-sm font-medium uppercase text-primary-500">
      {text.split(' ').join('-')}
    </p>
  )
}

export default PTag
