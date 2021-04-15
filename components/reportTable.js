export default function ReportTable(props){
    return(
      <table className="w-1/2 mx-auto my-8 bg-green-500 rounded-md">
          <thead>
              <tr>
                  <th>Location</th>
                  {props.hours_arr.map(hour => (
                      <th>{hour}</th>
                  ))}
                  <th>Totals</th>
              </tr>
          </thead>
          <tbody>
              {props.ReportTable.map(data => (
                  <tr className="odd:bg-green-400">
                      <td className="pl-2 border border-gray-700">{data.location}</td>
                      {data.hourly_sales.map(sale =>(
                          <td className="pl-2 border border-gray-700">{sale}</td>
                    ))}
                      <td className="pl-2 border border-gray-700">{data.hourly_total}</td>
                  </tr>
              ))}
          </tbody>
          <tfoot>
              <tr>
                  <td className="pl-2 font-bold border border-gray-700">Totals</td>
                        {props.latestTotalSales.map(item =>(
                            <td className="pl-2 font-bold border border-gray-700">{item}</td>
                        ))}
              </tr>
          </tfoot>
      </table>
    )
  }