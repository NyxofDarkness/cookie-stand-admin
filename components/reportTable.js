import { hours } from '../data'

export default function ReportTable({ stands, onDelete }) {
    return(
        <Table className="w-1/2 mx-auto my-8 bg-green-500 rounded-md">
            <thead>
                <tr>
                    <TH>Location</TH>
                    {hours.map(slot => (
                        <TH key={slot}>{slot}</TH>
                    ))}
                    <TH>Totals</TH>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {
                    return (
                        <tr key={stand.id} className="odd:bg-green-400">
                            <TH>
                                <div>
                                    <p>{stand.location}</p>
                                    <span onClick={() => onDelete(stand)}>X</span>
                                </div>
                            </TH>

                            {stand.hourlyCookies.map((amt, i) => (
                                <TD key={i}>
                                    {amt}
                                </TD>
                            ))}
                            <TD>{stand.latestTotalSales}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.hourlyCookies[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.latestTotalSales, 0)}</TD>
                </tr>
            </tfoot>
        </Table>
    );
}

function Table({ children }) {
    return (
        <table>
            {children}
        </table>
    )
}

function TH({ children }) {
    return (
        <th>{children}</th>
    )
}

function TD({ children }) {
    return (
        <td>{children}</td>
    )
}