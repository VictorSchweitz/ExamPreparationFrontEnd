const bookingForm = document.getElementById('booking-form')
const bookingFormLabels = document.querySelectorAll('label')
const bookingFormInputFields = document.querySelectorAll('.input.form-input')
const rentalDaysInput = document.getElementById('rental-days-input')
const rentalMsg = document.getElementById('rental-msg')
const totalPrice = document.getElementById('total-price')
const submitBtn = document.getElementById('submit-btn')
let dailyPrice = 1500

// EVENT LISTENERS //
window.addEventListener('load', () =>
{
    rentalMsg.style.display = 'none'
    clearInputFieldsOnLoad()
})

bookingForm.addEventListener('submit', (e) => validateForm(e))

// bookingFormInputFields[2].addEventListener('input', calculateAndDisplayTotalPrice)


// Functions //
function validateForm(e)
{
    bookingFormInputFields.forEach((bookingFormInputField) =>
    {
        if (bookingFormInputField.value === '' || bookingFormInputField.value.trim())
        {
            bookingFormInputField.style.border = '2px solid #e85a1e'
            setTimeout(() =>
            {
                bookingFormInputField.style.border = '2px solid #1bb9b9'
            }, 2000)

            e.preventDefault()
        }
    })

    const formInputFieldValues =
    {
        brand: bookingFormInputFields[0].value,
        model: bookingFormInputFields[1].value,
        rentalPeriod: bookingFormInputFields[2].valueAsNumber,
    }
    setAndGetLocalStorage(formInputFieldValues)

    // postForm()
}

// Clear input fields on load
function clearInputFieldsOnLoad()
{
    bookingFormInputFields.forEach((bookingFormInputField) =>
    {
        bookingFormInputField.value = ''
    })
}

// Show hide rental message
function toggleRentalMessageDisplayState()
{
    bookingFormInputFields[2].addEventListener('focus', () =>
    {
        rentalMsg.style.display = 'inline-block'
    })

    bookingFormInputFields[2].addEventListener('blur', () =>
    {
        rentalMsg.style.display = 'none'
    })
}

toggleRentalMessageDisplayState()


// Calculate and display total price
// function calculateAndDisplayTotalPrice()
// {
//     totalPrice.innerText = rentalDaysInput * dailyPrice
//     console.log(totalPrice.textContent)
// }

// Post Form
// async function postForm(url, formObject)
// {
//     let response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formObject)
//     })

//     let data = await response.json()
//     formObject(data)
//     console.log(data)
// }

// Get and set from local storage
function setAndGetLocalStorage(formInputFieldValues)
{
    let rowCount = localStorage.getItem('rowCount')
    rowCount++

    localStorage.setItem(rowCount, JSON.stringify(formInputFieldValues))
    localStorage.setItem('rowCount', rowCount)
}

// Remove item from local storage
export function removeFromLocalStorage()
{
    let rowCount = localStorage.getItem('rowCount')
    rowCount--

    localStorage.removeItem(rowCount, JSON.stringify(formInputFieldValues))
    localStorage.removeItem('rowCount', rowCount)
}