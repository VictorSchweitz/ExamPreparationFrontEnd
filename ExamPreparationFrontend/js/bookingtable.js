const editCellsBtn = document.getElementById('edit-cells-btn')

// Event Listeners //
editCellsBtn.addEventListener('click', editRows)


// Functions
window.addEventListener('load', () =>
{
  loadCarBookingsData()
})

// Load car bookings data
function loadCarBookingsData()
{
  const rowCount = localStorage.getItem('rowCount')

  let i = 1

  while (i < rowCount)
  {
    const item = localStorage.getItem(i)
    const parsedItem = JSON.parse(item)
    appendRowToBookingsTable(parsedItem)
    i++
  }
}

// Add row to booking table
const bookingsTable = document.getElementById('bookings-table')
const appendBtn = document.getElementById('append-btn')


// Append row to booking table
function appendRowToBookingsTable(carObject)
{
  let row = bookingsTable.insertRow(-1)
  let brandCell = row.insertCell(0)
  let modelCell = row.insertCell(1)
  let rentalStartCell = row.insertCell(2)
  let rentalEndCell = row.insertCell(3)
  console.log(rentalEndCell)
  let editCell = row.insertCell(4)

  // Insert data into each cell (this should)
  brandCell.textContent = carObject.brand
  modelCell.textContent = carObject.model
  rentalStartCell.innerHTML = getRentalStartDate()
  rentalEndCell.innerHTML = getRentalEndDate()
  console.log(rentalStartCell.textContent)

  /*
        
        <button class="btn edit-btn" onclick="editRow(this)">
          <i class="fas fa-pencil"></i>
        </button>
  
  */

  editCell.innerHTML = `
      <td>
        <button onclick="editRow(this)" class="btn edit-btn">
          <i class="fas fa-check"></i>
        </button>
  
        
        <button class="btn delete-btn" onclick="deleteRow(this)">
          <i class="fas fa-trash-can"></i>
        </button>
      </td>
    `

  console.log(document.querySelector('.delete-btn'))
}

// Get rental start date
function getRentalStartDate()
{
  let startDate = new Date().getDate() + '/' + parseInt(new Date().getMonth() + 1)
  return startDate
}

function getRentalEndDate()
{
  let endDate = new Date()
  endDate = endDate.setDate(endDate.getDate() + 5)
  return new Date(endDate).getDate() + '/' + parseInt(new Date(endDate).getMonth() + 1)
}


// Edit Row
function editRows(e)
{
  let cells = document.querySelectorAll('tr td:not(:last-child)')

  cells.forEach((cell) =>
  {
    cell.contentEditable = true
  })
}

// Delete Row
function deleteRow(row)
{
  let i = row.parentNode.parentNode.rowIndex
  bookingsTable.deleteRow(i)
}

