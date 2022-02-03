const Headline = ({ className, children }) => {
  return <h3 className={`inline-block mb-30px border-b-4 border-white border-solid text-36px font-extrabold uppercase tracking-tight antialiased${ className ? ` ${className}` : ''}`}>{children}</h3>
}

export default Headline;
