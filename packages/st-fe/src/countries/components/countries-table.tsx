export const CountriesTable = () => {
    const countries: any[] = [];

    return (
        <table cellPadding={10} cellSpacing={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Population</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(country => (
                    <tr key={country.id}>
                        <td>{country.id}</td>
                        <td>{country.name}</td>
                        <td>{country.capital ?? '-'}</td>
                        <td>{country.population}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
