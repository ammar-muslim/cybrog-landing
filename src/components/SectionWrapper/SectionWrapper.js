import "./SectionWrapper.css"

export const SectionWrapper = (props) => {
  return (
    <div className="section-wrapper">{props.children}</div>
  )
}


export default SectionWrapper