const CompensationTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-secondary/20">
            <th className="p-4 text-left text-secondary border border-white/10">Scenario</th>
            <th className="p-4 text-left text-secondary border border-white/10">Risarcimento</th>
            <th className="p-4 text-left text-secondary border border-white/10">Quota trattenuta</th>
            <th className="p-4 text-left text-secondary border border-white/10">Tu ricevi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-white/10">Volo cancellato, rimborso ottenuto con diffida</td>
            <td className="p-4 border border-white/10">250 €</td>
            <td className="p-4 border border-white/10">50 € (20%)</td>
            <td className="p-4 border border-white/10 font-bold text-secondary">200 €</td>
          </tr>
          <tr className="bg-white/5">
            <td className="p-4 border border-white/10">Volo in ritardo di 4 ore, rimborso ottenuto con diffida</td>
            <td className="p-4 border border-white/10">400 €</td>
            <td className="p-4 border border-white/10">80 € (20%)</td>
            <td className="p-4 border border-white/10 font-bold text-secondary">320 €</td>
          </tr>
          <tr>
            <td className="p-4 border border-white/10">Volo cancellato, rimborso ottenuto in giudizio</td>
            <td className="p-4 border border-white/10">600 €</td>
            <td className="p-4 border border-white/10">150 € (25%)</td>
            <td className="p-4 border border-white/10 font-bold text-secondary">450 €</td>
          </tr>
          <tr className="bg-white/5">
            <td className="p-4 border border-white/10">Volo in ritardo di 5 ore, rimborso ottenuto in giudizio</td>
            <td className="p-4 border border-white/10">600 €</td>
            <td className="p-4 border border-white/10">150 € (25%)</td>
            <td className="p-4 border border-white/10 font-bold text-secondary">450 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompensationTable
