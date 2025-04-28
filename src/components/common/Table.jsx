import React from 'react';

const Table = ({ data }) => {
    if (!data.length) return <div>No Data</div>;

    const headers = Object.keys(data[0]);

    return (
        <table className="w-full border mt-4">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header} className="border p-2">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {headers.map((header) => (
                            <td key={header} className="border p-2">{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;