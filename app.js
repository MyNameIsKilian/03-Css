document.addEventListener("DOMContentLoaded", (e) => {
  const inputs = document.querySelectorAll(".controls input")

  const updateInput = (event) => {
    const target = event.currentTarget
    const suffix = target.dataset.sizing || '';
    console.log(target.name)
    console.log(target.value)
    document.documentElement.style.setProperty("--" + target.name, target.value + suffix)
  }
  inputs.forEach(input => input.addEventListener("mousemove", updateInput))
  inputs.forEach(input => input.addEventListener("change", updateInput))
})
