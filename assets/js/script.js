const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const gender = getSelectedValue('gender')

    const age = getInputNumberValue('age');
    const height = getInputNumberValue('height');
    const weight = getInputNumberValue('weight');

    const activity_level = getSelectedValue('activity_level');

    let basalMetRate = 0;

    if (gender === 'F') {
        basalMetRate = Math.round(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
    } else {
        basalMetRate = Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
    }

    const maintenance = Math.round(basalMetRate * Number(activity_level));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    const resultLayout = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${basalMetRate} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
    `

    const resultContainer = document.getElementById('resultContainer');

    resultContainer.innerHTML = resultLayout;
});

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

function getSelectedValue(id) {
    const select = document.getElementById(id);

    return select.options[select.selectedIndex].value;
}