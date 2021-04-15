export default function Footer(props){
    return(
      <footer className="bg-green-500 p-4 flex">
        <p>{props.reportTable.length} Locations World Wide</p>
      </footer>
    )
  }