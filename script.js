function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60)
  minutes = minutes % 60
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
}

function calculatePerformance() {
  const estimatedTime = document.getElementById("estimatedTime").value
  const actualTime = document.getElementById("actualTime").value

  const estimatedMinutes = timeToMinutes(estimatedTime)
  const actualMinutes = timeToMinutes(actualTime)

  const performanceMetric = estimatedMinutes - actualMinutes
  const performanceMetricTime = minutesToTime(Math.abs(performanceMetric))
  const sign = performanceMetric >= 0 ? "+" : "-"
  const percentageDeviation =
    (Math.abs(performanceMetric) / estimatedMinutes) * 100

  let classificationMessage = ""
  let remainingTimeMessage = ""

  if (performanceMetric > 0) {
    classificationMessage = "Under-run"
    remainingTimeMessage = `Remaining Time: ${minutesToTime(performanceMetric)}`
  } else if (performanceMetric < 0) {
    classificationMessage = "Over-run"
    remainingTimeMessage = ""
  } else {
    classificationMessage = "Correct"
    remainingTimeMessage = ""
  }

  document.getElementById("result").innerHTML = `
      <p>Performance Metric: ${sign}${performanceMetricTime}</p>
      <p>Percentage Deviation: ${percentageDeviation.toFixed(2)}%</p>
      <p>Classification: ${classificationMessage}</p>
      ${remainingTimeMessage ? `<p>${remainingTimeMessage}</p>` : ""}
  `
}
