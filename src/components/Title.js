import './Title.css'

export default function Title({ title, subtitle }) { // Destructuring
  return (
      <div className="title-block">
          <h1>{ title }</h1>
          <h2>{ subtitle }</h2>
      </div>
  )
}
